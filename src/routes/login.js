const path = require("path");
const express = require("express");
const { Router } = require("express");
const router = Router();

const accounts = require("../storage/accounts.json");

router.get('/login', (req, res) => {
	if(!req.cookies.account){
		res.render("login");
	}else{
		res.redirect("/");
	};
});

router.get('/logout', (req, res) => {
	if(!req.cookies.account){
		res.redirect("/login");
	}else{
		res.clearCookie("account");
		res.redirect("/");
	};
});

router.post('/login', (req, res) => {
	if(!req.body.terms){
		let i = Object.keys(accounts).filter(account => account == req.body.email);
		if(i.indexOf(req.body.email) == -1 || req.body.password != accounts[i[0]].password){
			res.clearCookie("account");
			res.redirect("/login");
		}else if(i.indexOf(req.body.email) != -1 && req.body.password == accounts[i[0]].password){
			res.cookie('account', req.body.email);
			res.redirect("/");
		};
	}else{
		res.redirect("/")
	};
});

module.exports = router;