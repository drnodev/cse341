const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');

const app = express();
//const routes = require("./routes/routes")
const contacts = require("./routes/contacts")
const port = process.env.PORT || 8080;

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })

// app.use('/',(req,res)=>{
//     res.status(200).send({message: "node is cool!"});
// })
app.use('/contacts',contacts)

app.listen(port, () => {
    console.log(`app listening on ${port}`)
    mongodb.initDb()
})

