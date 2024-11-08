const express = require('express');
const app = express();

const path = require('path');
require('dotenv').config();

app.use(express.json()); // Middleware para parsear el body de las peticiones
app.use(express.static('public')); // Middleware para servir archivos estáticos de front. CSS,JS,Assets

// Configuración de vistas PUG - Motor de plantillas
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const homeRoutes = require("./routes/home.routes.js")
const aboutRoutes = require("./routes/about.routes.js")
const locationRoutes = require("./routes/location.routes.js")
const missionRoutes = require("./routes/mission.routes.js")
const contactRoutes = require("./routes/contact.routes.js")

// GET http://localhost:3000/home

app.use('/home', homeRoutes);

app.use('/about', aboutRoutes);

app.use('/location', locationRoutes);

app.use('/mission', missionRoutes);

app.use('/contact', contactRoutes);




// // //GET http://localhost:3000/
// app.get('/home', (req, res) => {
//     res.render('home'); // Renderiza la plantilla 'home.pug' desde la carpeta 'views'
// });
//para redirigir a home
app.get('/', (req, res) => {
  res.redirect('/home');
});

// // http://localhost:3000/first_template
// app.get('/first_template', function(req, res){
//     res.render('first_view.pug');
//   });

// app.use((req, res, next) => {
//   res.setHeader(
//       "Content-Security-Policy",
//       "default-src *; img-src * data:; script-src * 'unsafe-inline'; style-src * 'unsafe-inline';"
//   );
//   next();
// });


// app.use("*", manage404);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})