const CartItem = require('../models/cartItemModel');

exports.findByProductId = async (productId) => await CartItem.findOne({ productId });

exports.getAll = async () => await CartItem.find().populate('productId');

exports.create = async (data) => await CartItem.create(data);

exports.updateQty = async (id, qty) => await CartItem.findByIdAndUpdate(id, { qty }, { new: true });

exports.deleteById = async (id) => await CartItem.findByIdAndDelete(id);

exports.clearAll = async () => await CartItem.deleteMany({});