const productService = require("../services/productService");

exports.getProducts = async (req, res) => {
  try {
    const products = await productService.getProducts();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    let id = req.params.id;
    const products = await productService.getProductById(id);
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
