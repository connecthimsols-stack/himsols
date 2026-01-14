const Order = require('../models/Order');
const Tree = require('../models/Tree');

// Create an order
exports.createOrder = async (req, res) => {
  try {
    const { customer_name, phone, tree_id, quantity, delivery_location } = req.body;

    if (!customer_name || !phone || !tree_id || !delivery_location) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const tree = await Tree.findById(tree_id);
    if (!tree) {
      return res.status(404).json({ error: 'Tree not found' });
    }

    const total_price = tree.price * (quantity || 1);

    const order = new Order({
      customer_name,
      phone,
      tree_id,
      quantity: quantity || 1,
      total_price,
      delivery_location,
    });

    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all orders (for testing)
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('tree_id');
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
