const { Router } = require('express');
const router = Router();

const productos = require('../storage/products.json');
const accounts = require("../storage/accounts.json");
let usuario;
router.get("/", (req, res) => {
	if(!req.cookies.account){
		usuario = null;
	}else{
		usuario = {
			"email": `${req.cookies.account}`,
			"firstName": accounts[`${req.cookies.account}`].firstName,
			"lastName": accounts[`${req.cookies.account}`].lastName
		};	
	};
	res.render('index', {
		productos: productos,
		usuario: usuario
	});
});

module.exports = router;