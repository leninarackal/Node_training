const express =require('express')
const app = express();
const connectDB =require('./db')
const bodyparser = require('body-parser')
require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send("hi..Lenin, welcome to my restaurent")
})

const personRoutes = require('./routes/personRoutes')
const menuRoutes = require('./routes/menuRoutes')
app.use('/menuitem', menuRoutes)
app.use('/person', personRoutes)

connectDB();
app.listen(PORT,()=>{
    console.log("server is running on port 3000")
})