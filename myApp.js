let express = require('express');
let app = express();



app.use('/public', express.static(__dirname + "/public"));

app.get('/json' , (req, res) => {
  res.json({"message": "Hello json"});
});

const viewAbsolutePath = __dirname + '/views/index.html';

app.get('/', (req, res) => {
  res.sendFile(viewAbsolutePath);
});

app.get('/', (req,res)=>{
  res.send(__dirname);
});


console.log("Hello World");

































 module.exports = app;
