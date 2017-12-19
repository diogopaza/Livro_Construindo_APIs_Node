const fs = require( 'fs')

const someMAth = 1+1;

fs.readFile('texto.txt', 'utf-8', function(err, content){
    if(err){
        return console.log(err)
    }
    console.log(content)

});

const text = 'a resposta é: ' + someMAth;
console.log(text);