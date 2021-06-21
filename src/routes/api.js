const { Router } = require('express');
const router = Router();

const products = require('../storage/products.json');

router.get('/api/products', (req, res) => {

	res.json(products);

});

module.exports = router;