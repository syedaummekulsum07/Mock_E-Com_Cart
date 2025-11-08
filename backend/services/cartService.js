const cartDAO = require("../dao/cartDao");
const productDAO = require("../dao/productDao");

exports.addToCart = async (productId, qty) => {
  const product = await productDAO.findById(productId);
  if (!product) throw new Error("Product not found");

  let cartItem = await cartDAO.findByProductId(productId);
  if (cartItem) {
    cartItem.qty += qty;
    await cartItem.save();
  } else {
    cartItem = await cartDAO.create({ productId, qty });
  }
  return cartItem;
};

exports.getCart = async () => {
  const items = await cartDAO.getAll();
  console.log("items inside cart service", items);
  const cartItems = items.map((i) => ({
    id: i._id,
    name: i.productId.name,
    price: i.productId.price,
    qty: i.qty,
  }));
  const total = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);
  return { items: cartItems, total };
};

exports.updateQty = async (id, qty) => await cartDAO.updateQty(id, qty);

exports.removeFromCart = async (id) => await cartDAO.deleteById(id);
