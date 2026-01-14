const express = require('express');
const router = express.Router();
const treeController = require('../controllers/tree.controller');

router.get('/', treeController.getTrees);
router.post('/', treeController.createTree);

module.exports = router;
