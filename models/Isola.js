const mongoose = require('mongoose')

const isolaSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    descrizione:{
        type: String,
        required: true
    },
    dimensioneGriglia:{
        type: Array, //altezza, larghezza, profondità
        required: true
    },
    dimensioneMediaPacco:{
        type: Array,
        required: true
    },
    dimensioneMinPacco:{
        type: Array,
        required: true
    },
    dimensioneMaxPacco:{
        type: Array,
        required: true
    },
    caratteristichePacco:{
        type: Array, //non mi ricordo cosa sia
        required: true
    },
    nPacchiMassimo:{
        type: Number,
        required: true
    },
    idMagazzino:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Isola', isolaSchema)