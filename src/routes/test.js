const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
	res.render("test")
});

router.get('/cookies', (req, res) => {
	res.json(req.cookies);
});

router.get('/cookies/clear', (req, res) => {
	res.clearCookie("account");
	res.send("Listo.");
});

module.exports = router;