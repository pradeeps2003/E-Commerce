const express = require('express');
const { addProduct, viewProducts } = require('../controllers/vendorController');
const { auth, authorizeRoles } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/products', auth, authorizeRoles('vendor'), addProduct);
router.get('/products', auth, authorizeRoles('vendor'), viewProducts);

module.exports = router;
