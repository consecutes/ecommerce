const path = require("path")
const express = require("express")
const { Router } = require("express");
const router = Router()

const accounts = require("../storage/accounts.json");

router.get('/login', (req, res) => {
	res.render("login")
})
router.post('/login', (req, res) => {
	console.log(req.body);
	if(!req.body.terms){
		let i = Object.keys(accounts).filter(account => account == req.body.email);
		if(i.indexOf(req.body.email) == -1 || req.body.password != accounts[i[0]].password){
			res.clearCookie("account")
			res.redirect("/login");
		}else if(i.indexOf(req.body.email) != -1 && req.body.password == accounts[i[0]].password){
			res.cookie('account', req.body.email)
			res.redirect("/");
		};
	}else{
		res.send("Piola");
	};
});

module.exports = router;