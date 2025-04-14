
import express from 'express';
const router = express.Router();
import auth from '../middleware/auth.js';
import User from '../models/User.js';
// Get current user profile
router.get('/me', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .select('-password')
      .populate('wishlist.product');
      
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Update user profile
router.put('/me', auth, async (req, res) => {
  try {
    const { name, email, phone, avatar } = req.body;
    
    const userFields = {};
    if (name) userFields.name = name;
    if (email) userFields.email = email;
    if (phone) userFields.phone = phone;
    if (avatar) userFields.avatar = avatar;

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { $set: userFields },
      { new: true }
    ).select('-password');
    
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Add address
router.post('/me/addresses', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    
    const newAddress = {
      ...req.body,
      isDefault: user.addresses.length === 0
    };
    
    user.addresses.push(newAddress);
    await user.save();
    
    res.json(user.addresses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Add to wishlist
router.post('/me/wishlist', auth, async (req, res) => {
  try {
    const { productId } = req.body;
    
    const user = await User.findById(req.user.id);
    
    // Check if already in wishlist
    const alreadyExists = user.wishlist.some(
      item => item.product.toString() === productId
    );
    
    if (alreadyExists) {
      return res.status(400).json({ msg: 'Product already in wishlist' });
    }
    
    user.wishlist.push({ product: productId });
    await user.save();
    
    res.json(user.wishlist);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

export default router;