const express = require('express');
const { auth, authorize } = require('../middleware/authMiddleware');
const { getAllUsers, createProduct } = require('../controllers/adminController');
const router = express.Router();

router.use(auth);
router.use(authorize(['admin']));

router.get('/users', getAllUsers);
router.post('/products', createProduct);

module.exports = router;