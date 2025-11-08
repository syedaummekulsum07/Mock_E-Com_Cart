const checkoutService = require("../services/checkoutService");

exports.checkout = async (req, res) => {
  const { name, email } = req.body;
  try {
    const receipt = await checkoutService.checkout(name, email);
    res.json({ receipt });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
