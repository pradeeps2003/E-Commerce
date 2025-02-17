const express = require('express');
const { addProduct } = require('../controllers/staffController');
const { auth, authorizeRoles } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/products', auth, authorizeRoles('staff'), addProduct);

module.exports = router;
