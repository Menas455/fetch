const express = require('express');
const routes = express.Router();
const login = require('../control/login.js')

routes.get('/', (req, res)=>{
    res.render('index')
})

routes.post('/', login.verificar)


module.exports = routes ;