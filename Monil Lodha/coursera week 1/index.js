const express = require('express');
const http = require('http');
const morgan= require('morgan');
const bodyparser=require('body-parser');

////Used to import dishrouter module into our main js
const dishrouter=require('./routes/dishrouter'); 
const promorouter=require('./routes/promorouter');
const leadrouter=require('./routes/leadrouter');


const hostname = 'localhost' ;
const port =3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyparser.json());

//These will handle all the client requests being called.
app.use('/dishes',dishrouter); // client requests for dishes handled here
app.use('/promotions',promorouter); //for promotions here
app.use('/leaders',leadrouter); //for leaders here

app.use(express.static(__dirname + '/public'));


app.use((req,res,next) => {
    // console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-type','text/html');
    res.end('<html><body><h1>This is an express server.</h1></body></html');

})

const server=http.createServer(app);

server.listen(port,hostname, () =>{
    console.log(`Server running at http://${hostname}:${port}`)
});
