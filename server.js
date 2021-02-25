const express = require('express')
const mongoose = require('mongoose');
const { db } = require('./models/Isola');
const app = express()

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log("Server Started"))

/* let db = keyDb
mongoose.connect(keyDB)
db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB Connection Error: '))
db.once('open', () => {
    console.log('MongoDB Connected')
}) */