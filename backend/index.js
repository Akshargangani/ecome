const express = require('express')
const cors = require('cors')      
const cookieParser = require('cookie-parser')      
require('dotenv').config()
const connectDB = require('./config/db.jsx')
const router = require('./routes/index.js')

const app = express()

const corsOptions = {
  origin: 'http://localhost:5173', // Replace with your frontend URL
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json())
app.use(cookieParser())
app.use("/api",router)

const PORT = 8000 || process.env.PORT

connectDB().then(() => {
app.listen(PORT, () => {
    console.log("connected to database")
    console.log("server is running on port 8000")
})
})
