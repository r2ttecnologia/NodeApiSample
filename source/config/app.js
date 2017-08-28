//Importação do módulos
var bodyparser = require('body-parser');
var express = require('express');
var https = require('https');
var fs = require('fs');

/*
//Servidor https
const options = {
    key: fs.readFileSync('cert.key'),
    cert: fs.readFileSync('cert.crt'),
    requestCert:false,
    rejectUnauthorized: false
};
*/

//Filtragem
const allowCors = function (req, res, next) {
    //Acesso apenas da rede local
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
};

//Criação dos objetos
var app = express();

//Configuração dos objetos
//Executar filtragem nas requisições
app.use(allowCors);

// parse application/x-www-form-urlencoded                                    
app.use(bodyparser.urlencoded({
    'extended': 'true'
}));

// parse application/json          
app.use(bodyparser.json());

//Cria um servidor https
//https.createServer(options, app).listen('9000');
app.listen(9000);

//Exporta o módulo configurado
module.exports = app;
