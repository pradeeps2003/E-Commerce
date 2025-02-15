const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const signup = async (req, res) => {
    const { username, email, password, role } = req.body;
    try {
        const user = new User({ username, email, password, role });
        await user.save();
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.status(201).send({ user, token });
    } catch (err) {
        res.status(400).send(err);
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) throw new Error('Invalid credentials');
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw new Error('Invalid credentials');
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.send({ user, token });
    } catch (err) {
        res.status(400).send(err.message);
    }
};

module.exports = { signup, login };