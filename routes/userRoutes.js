const express = require('express');
const { auth, authorize } = require('../middleware/authMiddleware');
const { getAllProducts } = require('../controllers/userController');
const router = express.Router();

router.use(auth);
router.use(authorize(['user']));

router.get('/products', getAllProducts);

module.exports = router;