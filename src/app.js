const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const treeRoutes = require('./routes/tree.routes');
const orderRoutes = require('./routes/order.routes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to database
connectDB();

// Root route
app.get('/', (req, res) => {
  res.json('HIMSOLS Phase-0 Backend Running');
});

// Routes
app.use('/api/trees', treeRoutes);
app.use('/api/orders', orderRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

module.exports = app;
