const mongoose = require('mongoose')

const magazzinoSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    descrizione:{
        type: String,
        required: true
    },
    indirizzo:{
        type: String,
        required: true
    },
    aziendaProprietaria:{
        type: String,
        required: true
    },
    statoMagazzino:{
        type: String, //attivo, pieno, chiuso
        required: true
    },
    percentualeRiempimento:{
        type: Number,
        required: true
    },
    dimensioniMagazzino:{
        type: Array,
        required: true
    },
    tipoSpostamento:{
        type: Array, //[Muletto, 8] tipo e altezza(in m)
        required: true
    },
    tipoSupporti:{
        type: Array, //[Scaffali, Pallet]
        required: true
    }
})

module.exports = mongoose.model('Magazzino', magazzinoSchema)