// requiring express and creating port
const express = require('express');
const app = express();
const port= 8000;
const db = require('./config/mongoose');
const path=require('path')
const expressLayout = require('express-ejs-layouts');

app.set('view engine','ejs');
app.set('views','./views');

app.set('views',path.join(__dirname,'views'));

app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
//Use router
app.use(express.urlencoded());
app.use(express.static('./assets'));
app.use(expressLayout);



app.use('/',require('./routes/index'));


app.listen(port,function(err){
    if(err){
        console.log(`Error in starting the server : ${err}`);
        return ;
    }
    console.log(`Server is running on port : ${port}`);
})


