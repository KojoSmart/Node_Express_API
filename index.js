import express from 'express'

import bodyParser from 'body-parser'
import usersRoutes from './routes/users.js';
const app= express()


const PORT = 5000;
// using json data 
app.use(bodyParser.json())

app.use('/users', usersRoutes)

app.get('/', (req, res)=>{
     console.log("TEST")
    res.send("Hello from Home page")
})

app.listen(PORT, ()=>
console.log("Server is running on port 5000")
)