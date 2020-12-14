const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const apiRouter = require('./routes')

// middleware morgan
app.use(morgan('dev'))

// Para evitar error de CORS
app.use(cors())

// Body Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// API ENDPOINTS
/*se debe contar un una ruta por medio de método post para el inicio de sesión de la siguiente manera:
'/api/auth/signin'
*/

app.get('/', function(req, res) {
    console.log("Estructura base del proyecto backend");
    res.send("Estructura base del proyecto backend");
});

// Ruta desde el router
app.use('/api', apiRouter)

// app.set('port', process.env.PORT || 3000)
const port = process.env.PORT || 3000

app.listen(process.env.PORT || 3000, () => {
    console.log(`Running on http://localhost:${port}`) //local
    // console.log(`Running on port: ${process.env.PORT}`) // Heroku
})

module.exports = app;
