const Product = require("../models/productModel");

exports.getAll = async () => await Product.find();

exports.insertMany = async (data) => await Product.insertMany(data);

exports.findById = async (id) => await Product.findById(id);
