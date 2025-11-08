const productDAO = require("../dao/productDao");

exports.getProducts = async () => {
  let products = await productDAO.getAll();
  if (products.length === 0) {
    products = await productDAO.insertMany([
      { name: "Vibe Sneakers", price: 4999 },
      { name: "Vibe Hoodie", price: 3999 },
      { name: "Vibe Backpack", price: 2999 },
      { name: "Vibe Tee", price: 1999 },
      { name: "Vibe Cap", price: 1499 },
    ]);
  }
  return products;
};

exports.getProductById = async (id) => {
  let product = await productDAO.findById(id);
  return product;
};
