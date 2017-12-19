const express = require('express');

const app = express();

app.use('/users', (req,res,next) => {
    
        console.log('will run before  USERS  route');
        next();
    })

    app.use('/users', (req,res,next) => {
        
            console.log('middleware 2 no users /users');
            next();
        })

app.get('/', function(req, res, next){
    
        console.log('route / called');
        res.send('hello middleware3')
    
    });

app.get('/users', (req,res,next) => {

    console.log('rota /users chamada');
    res.send('hello world no USERS')
})



app.listen(3000, () => {
    console.log('app is running')
})