const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customer_name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  tree_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tree',
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  total_price: {
    type: Number,
    required: true,
  },
  delivery_location: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'PLACED',
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Order', orderSchema);
