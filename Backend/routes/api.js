const express = require('express');
const router = express.Router();
const { getUsers, createUser, loginUser, getUserProfile } = require('../controllers/apiController');
const { protect } = require('../middleware/authMiddleware');

router.route('/users')
  .get(getUsers)
  .post(createUser);

router.post('/users/login', loginUser);
router.get('/users/profile', protect, getUserProfile);

module.exports = router; 