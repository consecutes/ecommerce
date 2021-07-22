const { Router } = require('express');
const router = Router();

const productos = require('../storage/products.json');
const accounts = require("../storage/accounts.json");
let mensaje;
router.get("/", (req, res) => {
	if(!req.cookies.account){
		console.log("Registrate")
	}else{
		console.log(req.cookies.account)
	}
	res.render('index', {
		camisas: productos.shirts,
		mensaje: mensaje
	});
});

module.exports = router;