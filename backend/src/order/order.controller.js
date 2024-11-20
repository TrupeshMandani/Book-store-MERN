const Order = require("./order.model"); // Make sure you import the model

// Example of the createAOrder function
const createAOrder = async (req, res) => {
  try {
    const newOrder = new Order(req.body); // Create a new order document
    await newOrder.save(); // Save it to the database
    res.status(201).json(newOrder); // Return the newly created order
  } catch (err) {
    console.error("Error creating order:", err);
    res.status(500).json({ message: "Error creating order" });
  }
};

// Example of the getOrdersByEmail function
const getOrdersByEmail = async (req, res) => {
  const { email } = req.params; // Extract email from the URL parameters
  try {
    const orders = await Order.find({ email });

    // Check if no orders were found for the provided email
    if (orders.length === 0) {
      return res
        .status(404)
        .json({ message: "No orders found for this email" });
    }

    // Send the found orders as the response
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Export the functions
module.exports = { createAOrder, getOrdersByEmail };
