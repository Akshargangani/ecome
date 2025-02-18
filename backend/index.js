const express = require('express')
const cors = require('cors')            
require('dotenv').config()
const connectDB = require('./config/db.jsx')
const router = require('./routes/index.jsx')


const app = express()
app.use(cors())
app.use(express.json())

app.use("/api",router)

const PORT = 8000 || process.env.PORT

connectDB().then(() => {
app.listen(PORT, () => {
    console.log("connected to database")
    console.log("server is running ")
})

})