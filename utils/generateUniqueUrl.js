const generateUniqueUrl = async (productName) => {
    let url = productName.replace(/\s+/g, '-').toLowerCase();
    const existingProduct = await Product.findOne({ url });
    if (existingProduct) {
        url = `${url}-${Date.now()}`;
    }
    return url;
};

module.exports = { generateUniqueUrl };
