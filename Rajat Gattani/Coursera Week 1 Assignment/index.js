const express= require('express');
const http = require('http');
const morgan= require('morgan');
const path= require('path');
const bodyParser=require('body-parser');

const dishRouter= require('./routes/dish-router');
const promoRouter= require('./routes/promoRouter');
const leaderRouter= require('./routes/leaderRouter');

const hostname='localhost';
const port = 3000;

const app=express();
app.use(morgan('dev'));
app.use(bodyParser.json());


app.use('/dishes',dishRouter);
app.use('/leaders',leaderRouter);
app.use('/promos',promoRouter);

// app.get('/dishes/:dishID',(req,res,next)=>{
//     res.end('Will send details of the dish: '+ req.params.dishID);
// });

// app.post('/dishes',(req,res,next)=>{
//     res.statusCode=403;
//     res.end('Post Operation not supported on /dishes/'+req.params.dishID);
// });

// app.put('/dishes',(req,res,next)=>{
//     res.write('Updating the dish: '+req.params.dishID);
//     res.end('Will update the dish: '+req.body.name+' with details'+ req.body.description)
// });

// app.delete('/dishes',(req,res,next)=>{
//     res.end('Deleting dish: '+ req.params.dishID);
// });
// app.use(express.static(__dirname+'/public'));

// app.use((req,res,next)=>{
//     res.statusCode=200;
//     res.setHeader('Content-Type','text/html');
//     res.end('<html><body><h1>This is an Express server</h1></body></html>');
// })

const server= http.createServer(app);

server.listen(port , hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}`);
})