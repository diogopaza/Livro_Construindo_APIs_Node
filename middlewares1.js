const express = require('express');

const app = express();

app.get('/', function(req, res, next){

    console.log('route / called');
    res.send('hello middleware')

});

app.listen(3000, () => {
    console.log('app is running')
})