const createAOrder = async (req, res) => {
  try {
    const newOrder = await Order(req.body);
    const saveOrder = await newOrder.save();
    res.status(201).json(saveOrder);
  } catch (error) {
    console.error("Error creating Order", error);
    res.status(400).json({ message: error.message });
  }
};
const getOrdersByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const orders = await Order.find({ email }).sort({ createdAt: -1 });
    if (!orders) {
      return res.status(404).json({ message: "No orders found" });
    }
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error getting Orders", error);
    res.status(400).json({ message: error.message });
  }
};
module.exports = {
  createAOrder,
  getOrdersByEmail,
};
