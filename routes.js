const express = require('express')
const router = express.Router()
const gerar = require('./random.js')

router.get('/random', function(req, res){
    const lugar = gerar()
    res.json(lugar)
})

module.exports = router