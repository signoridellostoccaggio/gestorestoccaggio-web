const express = require('express')
const mongoose = require('mongoose');
const app = express()
const keys = require('./config/keys')

const PORT = process.env.PORT || 8000;

let db = keys.MongoUri
mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB Connection Error: '))
db.once('open', () => {
    console.log('MongoDB Connected')
})

app.use(express.json({ extended: false }))
app.use('/entity/', require('./routes/isolaRoutes'))

app.listen(PORT, () => console.log("Server Started"))