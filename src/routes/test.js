const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
	res.send('/public/pruebas')
});

module.exports = router;