const express = require('express');

const Routes = express.Router();


Routes.get('/',(req,res)=>{
    res.render('index')
})

module.exports = "Routes";