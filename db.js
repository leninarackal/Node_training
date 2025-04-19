const mongoose =require('mongoose')

// Define the connection string to connect to MongoDB
const mongoURL = 'mongodb://localhost:27017/MyDB'

// Connect to MongoDB using the connection string
const connectDB = async () => {
    try {
        mongoose.connect(mongoURL).then(() => {
            console.log("MongoDB connected to the MongoDB server")
        })       
    } catch (error) {
        console.log("MongoDB connection failed", error);
        
    }
}
// Establish event listeners for connection events....
const db = mongoose.connection;

db.on('connected',()=>{
    console.log("MongoDB server started")
})
db.on('error',(err)=>{
    console.log("MongoDB connection failed", err)
})
db.on('disconnected',()=>{
    console.log("MongoDB disconnected")
})
// mongoose.connect(mongoURL, {useNewUrlParser: true, useUnifiedTopology: true})

// const db = mongoose.connection;

// db.on('connected',()=>{
//     console.log("MongoDB connected successfully")
// })
// db.on('error',(err)=>{
//     console.log("MongoDB connection failed", err)
// })
// db.on('disconnected',()=>{
//     console.log("MongoDB disconnected")
// })  
module.exports = connectDB;