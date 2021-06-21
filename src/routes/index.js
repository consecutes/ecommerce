const { Router } = require('express');
const router = Router();

const productos = require('../storage/products.json');

router.get("/", (req, res) => {
	res.render('index', {
		camisas: productos.shirts,
	});
});

module.exports = router;