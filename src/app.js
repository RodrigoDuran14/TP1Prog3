const express = require('express');
const mongoose = require('mongoose')
const {config} = require("./config")
const userRoutes = require('./routes/user') 

const app = express();
const PORT = 3001

app.use(express.json())
app.use('/api', userRoutes);


app.get('/', (req,res) =>{
  res.send("welcome to my API")
})


//conexion a la db
mongoose
  .connect(config.db_url)
  .then(() => console.log("Conexion con db exitosa"))
  .catch((e) => console.log("Error con db: ", e));


app.listen(PORT, ()=>{
  console.log('El servidor esta escuchando en el puerto ', PORT)
})
