const express = require('express');
const app = express();
const port = 3000;

const path = require('path');

app.use(express.json()); // Middleware para parsear el body de las peticiones
app.use(express.static('public')); // Middleware para servir archivos estáticos de front. CSS,JS,Assets

// Configuración de vistas PUG - Motor de plantillas
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const homeRoutes = require("./routes/home.routes.js")
const aboutRoutes = require("./routes/about.routes.js")
const locationRoutes = require("./routes/location.routes")
const missionRoutes = require("./routes/mission.routes")
const contactRoutes = require("./routes/contact.routes")



app.use('/home', homeRoutes);

app.use('/about', aboutRoutes);

app.use('/location', locationRoutes);

app.use('/mission', missionRoutes);

app.use('/contact', contactRoutes);




//GET http://localhost:3000/
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// // http://localhost:3000/first_template
// app.get('/first_template', function(req, res){
//     res.render('first_view.pug');
//   });



// app.use("*", manage404);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});