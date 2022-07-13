const express= require('express');
const bodyParser=require('body-parser');
const dishRouter= express.Router();

dishRouter.route('/')

.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})

.get((req,res,next)=>{
    res.end('Will send all the dishes!');
})

.post((req,res,next)=>{
    res.end('Will add the dish: '+ req.body.name+' with details: '+ req.body.description);
})

.put((req,res,next)=>{
    res.statusCode=403;
    res.end('Put Operation not supported');
})

.delete((req,res,next)=>{
    res.end('Deleting all dishes!');
});

dishRouter.route('/:dishId')

.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})

.get((req,res,next)=>{
    res.end('Will send the details of dish: '+ req.params.dishId);
})

.post((req,res,next)=>{
    res.statusCode=403;
    res.end('Post Operation not supported');
})

.put((req,res,next)=>{
    res.write('Updating the dish: '+ req.params.dishId+'\n');
    res.end('Update the dish '+ req.body.name+ 'with details: '+ req.body.description);
})

.delete((req,res,next)=>{
    res.end('Deleting the dish: '+ req.params.dishId);
});

module.exports=dishRouter;


