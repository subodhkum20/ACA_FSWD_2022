const express= require('express');
const bodyParser=require('body-parser');
const promoRouter= express.Router();

use.promoRouter(bodyParser.json());

promoRouter.route('/')

.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})

.get((req,res,next)=>{
    res.end('Will send all the promos!');
})

.post((req,res,next)=>{
    res.end('Will add the promo: '+ req.body.name+' with details: '+ req.body.description);
})

.put((req,res,next)=>{
    res.statusCode=403;
    res.end('Put Operation not supported');
})

.delete((req,res,next)=>{
    res.end('Deleting all promos!');
});

promoRouter.route('/:promoId')

.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})

.get((req,res,next)=>{
    res.end('Will send the details of promo: '+ req.params.dishId);
})

.post((req,res,next)=>{
    res.statusCode=403;
    res.end('Post Operation not supported');
})

.put((req,res,next)=>{
    res.write('Updating the promo: '+ req.params.dishId+'\n');
    res.end('Update the promo '+ req.body.name+ 'with details: '+ req.body.description);
})

.delete((req,res,next)=>{
    res.end('Deleting the promo: '+ req.params.dishId);
});

module.exports=promoRouter;


