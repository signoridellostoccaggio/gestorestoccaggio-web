const express = require('express')
//const connectDB = require('./Database/Connection')
const app = express()

const PORT = process.env.PORT || 8000;

//connectDB();

app.use(express.json({extended: false}))
//app.use('/api/subscriberModel', require('./Api/subscriber'))

app.listen(PORT, () => console.log("Server Started"))