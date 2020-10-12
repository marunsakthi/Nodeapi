const express = require('express');
const app = express(); 
bodyParser = require('body-parser'),
app.set('port',process.env.PORT||3000);

app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

const ContentRouter = require('./routes/ContentRoute');
//Route
app.use('/content', ContentRouter);

app.use('/test', (req, res) => {
  res.send("Test route");
});

app.listen(app.get('port'),()=>{
  console.log("Starting server Node.js");
})
