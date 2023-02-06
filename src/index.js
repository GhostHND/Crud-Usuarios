const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.port || 3030; 

app.use(express.json());         
app.use(cors());                 


app.use("/usuarios",usuarios);   

app.listen(posrt,()=>{
    console.log("Este servidor se esta ejecuntando en el puerto:", port);
});