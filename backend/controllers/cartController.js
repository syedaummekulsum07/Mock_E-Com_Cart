const cartService = require("../services/cartService");

exports.addToCart = async (req, res) => {
  const { productId, qty } = req.body;
  if (!productId || !qty)
    return res.status(400).json({ error: "productId and qty required" });
  try {
    const cartItem = await cartService.addToCart(productId, qty);
    res.status(201).json(cartItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCart = async (req, res) => {
  try {
    const data = await cartService.getCart();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateQty = async (req, res) => {
  const { qty } = req.body;
  try {
    let id = req.params.id;
    const updated = await cartService.updateQty(id, qty);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.removeFromCart = async (req, res) => {
  try {
    await cartService.removeFromCart(req.params.id);
    res.json({ message: "Product removed from the cart" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
