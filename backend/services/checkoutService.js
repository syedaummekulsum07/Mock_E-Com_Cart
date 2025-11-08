const checkoutDAO = require("../dao/checkoutDao");

exports.checkout = async (name, email) => {
  const items = await checkoutDAO.getCartItems();
  console.log(items);
  const cartItems = items.map((i) => ({
    name: i.productId.name,
    price: i.productId.price,
    qty: i.qty,
  }));
  const total = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);
  const receipt = {
    id: `rcpt_${Date.now()}`,
    name: name || "Guest",
    email: email || null,
    total,
    timestamp: new Date().toISOString(),
    items: cartItems,
  };
  await checkoutDAO.clearCart();
  return receipt;
};
