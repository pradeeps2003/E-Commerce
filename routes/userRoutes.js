const express = require('express');
const { viewProducts } = require('../controllers/userController');
const { auth } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/products', auth, viewProducts);

module.exports = router;