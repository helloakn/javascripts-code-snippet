const express = require('express')
const app = express()

//const helloMethod = require('./controllers/helloController.js')
// const helloMethod =  (req,client)=>{

//   client.send("hi hi hi tes");
// }

app.get('/hello',
  require('./controllers/helloController.js')
);

// app.post('/hello',
// helloMethod
// );


app.listen(3000)