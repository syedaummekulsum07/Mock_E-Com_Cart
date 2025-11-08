const express = require("express");
const router = express.Router();

const {
  getCart,
  addToCart,
  updateQty,
  removeFromCart,
} = require("../controllers/cartController");

router.post("/", addToCart);

router.get("/", getCart);

router.put("/:id", updateQty);

router.delete("/:id", removeFromCart);

module.exports = router;
