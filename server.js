//express = require('express');
//bodyParser = require('body-parser');
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.get('/', (req,res) => res.send('Hello world livro'));

app.listen(3000, () => {
    console.log('Exemplo app listening on port 3000');
});
