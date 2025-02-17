const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
    try {
        let { page = 1, limit = 10, search = '' } = req.query;
        page = parseInt(page);
        limit = parseInt(limit);

        const query = search ? { name: { $regex: search, $options: 'i' } } : {};

        const users = await User.find(query)
            .skip((page - 1) * limit)
            .limit(limit);

        const total = await User.countDocuments(query);

        res.json({
            users,
            total,
            page,
            totalPages: Math.ceil(total / limit),
        });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};
