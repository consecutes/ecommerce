// Express
const express = require('express');
const app = express();
// Módulos
const path = require('path');
// Configuración
app.set('port', 3000 || process.env.PORT); // Puerto
	// Archivos estáticos
app.use('/public', express.static(path.join(__dirname, 'views/public')));
app.use('/libs', express.static(path.join(__dirname, 'views/libs')))
	// Motor de plantillas (PUG)
app.set("views", path.join(__dirname, '/views/templates'));
app.set('view engine', 'pug');
// Routing
app.use(require('./src/routes/index'));
app.use(require('./src/routes/pruebas'));
app.use(require('./src/routes/api'));
// Iniciando servidor
app.listen(app.get('port'), () => {
	console.log('Servidor inciado correctamente en el puerto:', app.get("port"));
});