const express = require('express');
const { auth, authorize } = require('../middleware/authMiddleware');
const { addProduct } = require('../controllers/staffController');
const router = express.Router();

router.use(auth);
router.use(authorize(['staff']));

router.post('/products', addProduct);

module.exports = router;