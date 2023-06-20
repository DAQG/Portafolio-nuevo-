const express = require('express')//importacion el modulo
const path = require('path'); // para las rutas donde estan los archivos 
const { engine }  = require('express-handlebars')

const methodOverride = require('method-override');
// Inicializaciones
const app = express()

// Configuraciones 
app.set('port',process.env.port || 3000)
app.set('views',path.join(__dirname, 'views')) // especificacion de vistas
app.engine('.hbs',engine({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname:'.hbs' 
}))
app.set('view engine','.hbs')

// Middlewares 
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))


// Variables globales

// Rutas 
 //para el uso de varias rutas hacemos el cambio en routers y en esta parte de server
app.use(require('./routers/portafolio.routers'))
// Archivos estáticos
app.use(express.static(path.join(__dirname,'public'))) // dirname variable global 
// nunca copiar y pegar la ruta xq no va a dar respuesta

module.exports = app

// para ejecutar el start npm start
// para ejecutar el dev npm run dev