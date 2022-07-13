const express= require('express');
const bodyParser=require('body-parser');
const leaderRouter= express.Router();
use.leaderRouter(bodyParser.json());


leaderRouter.route('/')

.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})

.get((req,res,next)=>{
    res.end('Will send all the details of leaders!');
})

.post((req,res,next)=>{
    res.end('Will add the leader: '+ req.body.name+' with details: '+ req.body.description);
})

.put((req,res,next)=>{
    res.statusCode=403;
    res.end('Put Operation not supported');
})

.delete((req,res,next)=>{
    res.end('Deleting all leaders!');
});

leaderRouter.route('/:leaderId')

.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})

.get((req,res,next)=>{
    res.end('Will send the details of leader: '+ req.params.dishId);
})

.post((req,res,next)=>{
    res.statusCode=403;
    res.end('Post Operation not supported');
})

.put((req,res,next)=>{
    res.write('Updating the leader: '+ req.params.dishId+'\n');
    res.end('Update the leader '+ req.body.name+ 'with details: '+ req.body.description);
})

.delete((req,res,next)=>{
    res.end('Deleting the leader: '+ req.params.dishId);
});

module.exports=leaderRouter;


