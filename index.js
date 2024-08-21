const express = require('express');
const path = require('path');
const env =require('dotenv');

const Routes = require('./Routes/index.js');



const app = express();

const port = process.PORT || 3000;

app.set("view engine","ejs");

app.set('views',path.join(__dirname,'/views'));

app.use(express.static(path.join(__dirname,'/views')));


Routes.use('/');


app.get('/about',(req,res)=>{
    res.render('about');
    console.log("About Routes");
});



app.listen(port,(err)=>{

    if(!err){
        console.log(`Server is running on port ${port}`);
    }

})


