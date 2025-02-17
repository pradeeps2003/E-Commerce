const express = require('express');
const { createProduct, getAllUsers } = require('../controllers/adminController');
const { auth, authorizeRoles } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/products', auth, authorizeRoles('admin'), createProduct);
router.get('/users', auth, authorizeRoles('admin'), getAllUsers);

module.exports = router;