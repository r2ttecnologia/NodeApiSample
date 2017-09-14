//Importação do módulos
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const helmet = require('helmet');
const https = require('https');
const fs = require('fs');

// Strings de configuração
const dbhost = 'localhost';
const dbuser = 'user';
const dbpass = 'pass';
const dbname = 'db';
const port = 8080;
const dbconn = String.format("mongodb://{0}/{1}", dbhost, dbname);

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
    res.header('Access-Control-Allow-Methods', 'DELETE,GET,PATCH,POST,PUT');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

//Criação dos objetos
var app = express();

//Configuração dos objetos
//Executar filtragem nas requisições
app.use(allowCors);
app.use(helmet());

// parse application/x-www-form-urlencoded                                    
app.use(bodyparser.urlencoded({
    'extended': 'true'
}));

// parse application/json          
app.use(bodyparser.json());

//Cria um servidor https
//https.createServer(options, app).listen(port.toString());
app.listen(port);

//Conecta ao mongodb
mongoose.connect(dbconn, {user:dbuser, pass:dbpass, useMongoClient:true});

//Exporta o módulo configurado
module.exports.app = app;
module.exports.mongoose = mongoose;
