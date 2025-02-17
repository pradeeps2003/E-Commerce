exports.viewProducts = async (req, res) => {
    try {
        let { page = 1, limit = 10, search = '' } = req.query;
        page = parseInt(page);
        limit = parseInt(limit);

        const query = search ? { name: { $regex: search, $options: 'i' } } : {};

        const products = await Product.find(query)
            .skip((page - 1) * limit)
            .limit(limit);

        const total = await Product.countDocuments(query);

        res.json({
            products,
            total,
            page,
            totalPages: Math.ceil(total / limit),
        });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};
