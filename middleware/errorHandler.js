const errorHandler = (err, req, res, next) => {
    console.error(err);
    res.status(500).send({ error: 'Server Error' });
};

module.exports = { errorHandler };
