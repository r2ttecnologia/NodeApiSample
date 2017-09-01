const app = require('./config/config').app;

app.get('/', (req, res)=>{
    res.end();
});
