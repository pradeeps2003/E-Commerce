const Product = require('../models/Product');

exports.viewProducts = async (req, res) => {
    const { page = 1, limit = 10, search = '' } = req.query;
    const query = {
        $or: [
            { name: { $regex: search, $options: 'i' } },
            { category: { $regex: search, $options: 'i' } }
        ]
    };
    const { products, total } = await Product.paginate(query, page, limit);
    res.send({ products, total });
};
