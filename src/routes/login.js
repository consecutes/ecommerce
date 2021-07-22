const path = require("path")
const express = require("express")
const { Router } = require("express");
const router = Router()

router.get('/login', (req, res) => {
	res.render("login")
})
router.post('/login', (req, res) => {
	console.log(req.body)
	if(!req.body.terms){
		res.redirect("/")
	}else{
		res.send("Piola")
	}
});

module.exports = router;