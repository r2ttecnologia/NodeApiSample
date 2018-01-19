//Importação do módulos
const
    bodyparser = require('body-parser'),
    express = require('express'),
    helmet = require('helmet'),
    https = require('https'),
    port = 8080,
    fs = require('fs'),
    //Filtragem
    allowCors = function (req, res, next) {
        //Acesso apenas da rede local
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        res.header('Access-Control-Allow-Methods', 'DELETE,GET,PATCH,POST,PUT');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    };

module.exports = (app) => {

    /*
    //Servidor https
    const options = {
        key: fs.readFileSync('cert.key'),
        cert: fs.readFileSync('cert.crt'),
        requestCert:false,
        rejectUnauthorized: false
    };
    */

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
}