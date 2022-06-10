let express = require('express');
let app = express();


const viewAbsolutePath = __dirname + '/views/index.html';

app.get('/', (req, res) => {
  res.sendFile(viewAbsolutePath);
});

app.get('/', (req,res)=>{
  res.send(__dirname);
});


console.log("Hello World");

































 module.exports = app;
