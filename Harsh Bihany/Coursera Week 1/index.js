const express = require('express');
const http = require('http');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');

//importing the file based node module
const dishRouter = require('./routes/dishRouter');
const leaderRouter = require('./routes/leaderRouter');
const promoRouter = require('./routes/promoRouter');

const hostname = 'localhost';
const port = 3000;

//declaring that our application would be using express to construct a server
const app = express();
app.use(morgan('dev')); //this logs some information about the server
app.use(bodyParser.json()); //this allows to parse the body of the request message in JSON format

app.use('/dishes', dishRouter); //any request coming to the /dishes end point will be handled by dishRouter
app.use('/leaders', leaderRouter);
app.use('./promos', promoRouter);


//setting up the REST API support...

//when a request comes in, no matter what method is invoked, this is called first
/*app.all('/dishes', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next(); //this allows the modified object into the subsequent methods called
});

app.get('/dishes', (req, res, next) => {
    res.end('Will send all the dishes to you!');
});

app.post('/dishes', (req, res, next) => {
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
});

app.put('/dishes', (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not suppertef on /dishes');
});

app.delete('/dishes', (req, res, next) => {
    res.end('Deleting all the dishes!');
});*/

/*app.get('/dishes/:dishId', (req, res, next) => {
    res.end('Will send details of the dish: ' + req.params.dishId);
});

app.post('/dishes/:dishId', (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not suppertef on /dishes/' + req.params.dishId);
});

app.put('/dishes/:dishId', (req, res, next) => {
    res.write('Updating the dish: ' + req.params.dishId + '\n');
    res.end('Will update the dish: ' + req.body.name + 'with details: ' + req.body.description);
});

app.delete('/dishes/:dishId', (req, res, next) => {
    res.end('Deleting dish: ' + req.params.dishId);
});*/

//the above method will explode when the number of endpoints exceed a limit
//there's when Express Routers come into play
                    

//for us to serve static HTML files to the server,
//we use this functionality of Express
//further, this specifies that the static HTML files are from the public folder
//from our root directory of the project
app.use(express.static(__dirname + '/public'));

//the function to setup our server has three parameters: req, res and next
//next is used when one needs to invoke additional middleware to take care of work
app.use((req, res, next) => {
    console.log(req.headers);
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express server!</h1></body></html>');
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});