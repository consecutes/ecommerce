const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
	res.json(req.cookies)
});

module.exports = router;