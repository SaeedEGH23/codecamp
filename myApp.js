let express = require('express');
let app = express();

app.get('/about/some', (req,res)=>{
  res.send("Response String");
});


console.log("Hello World");

































 module.exports = app;
