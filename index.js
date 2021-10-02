const express = require('express')
const app = express()
const routes = require('./routes.js')
const cors = require('cors')
const porta = 3000

app.use(cors())
app.use('/api', routes)

app.listen(porta, function(){
    console.log('Servidor rodando')
})
