const express =require('express')
const app = express();
const connectDB =require('./db')
const bodyparser = require('body-parser')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))


// app.get('/menu',(req, res)=>{
//     var menu={
//         cusin:"multi cusine",
//         recipies:"non veg, veg, desserts",
//         is_Thali:true,
//         is_buffet:false,
//     }
//     res.send(menu)  
// })
app.get('/',(req,res)=>{
    res.send("hi..Lenin, welcome to my restaurent")
})




const personRoutes = require('./routes/personRoutes')
const menuRoutes = require('./routes/menuRoutes')
app.use('/menuitem', menuRoutes)
app.use('/person', personRoutes)

connectDB();
app.listen(3000,()=>{
    console.log("server is running on port 3000")
})