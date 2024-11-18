const Order = require("./order.model");

// Create a new order
const createAOrder = async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    console.error("Error creating Order", error);
    res.status(400).json({
      message: error.message || "Invalid order data. Please check your inputs.",
    });
  }
};

// Get orders by user email
const getOrdersByEmail = async (req, res) => {
  try {
    const { email } = req.params;

    // Fetch orders for the given email and sort them
    const orders = await Order.find({ email }).sort({ createdAt: -1 });

    if (!orders || orders.length === 0) {
      return res
        .status(404)
        .json({ message: "No orders found for this email" });
    }

    res.status(200).json(orders);
  } catch (error) {
    console.error("Error getting Orders:", error);
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createAOrder,
  getOrdersByEmail,
};
