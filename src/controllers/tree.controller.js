const Tree = require('../models/Tree');

// Get all trees
exports.getTrees = async (req, res) => {
  try {
    const trees = await Tree.find({ is_active: true });
    res.status(200).json(trees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a tree (for testing)
exports.createTree = async (req, res) => {
  try {
    const { name, description, price, image_url } = req.body;

    if (!name || !price) {
      return res.status(400).json({ error: 'Name and price are required' });
    }

    const tree = new Tree({
      name,
      description,
      price,
      image_url,
    });

    await tree.save();
    res.status(201).json(tree);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
