var 
    consign = require('consign'),
    app = (require('express'))();

consign().include('config').into(app);

if(process.send)
    process.send('ready');