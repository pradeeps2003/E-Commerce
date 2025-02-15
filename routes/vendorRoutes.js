const express = require('express');
const { auth, authorize } = require('../middleware/authMiddleware');
const { addProduct } = require('../controllers/vendorController');
const router = express.Router();

router.use(auth);
router.use(authorize(['vendor']));

router.post('/products', addProduct);

module.exports = router;