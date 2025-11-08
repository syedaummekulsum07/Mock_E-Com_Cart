const CartItem = require("../models/cartItemModel");

exports.getCartItems = async () => await CartItem.find().populate("productId");

exports.clearCart = async () => await CartItem.deleteMany({});
