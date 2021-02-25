const Isola = require("../models/Isola");

//Getting all Isola
exports.getAllIsola = async (req, res) => {
    try {
        const isole = await Isola.find()
        res.json(isole)
    } catch (err) {
        res.status(400).json({
            status: 'Fail',
            message: 'No Isola in DB'
        })
    }
}

/*Creating a new Isola*/
exports.createIsola = (req, res) => {
    const newIsola = {
        nome: req.body.nome,
        descrizione: req.body.decr,
        dimensioneGriglia: req.body.dimGr,
        dimensioneMediaPacco: req.body.dimMedPacco,
        dimensioneMinPacco: req.body.dimMinPacco,
        dimensioniMaxPacco: req.body.dimMaxPacco,
        caratteristichePacco: req.body.carattPacco,
        nPacchiMassimo: req.body.nPacchiMax,
        idMagazzino: req.body.idMag
    }

    Isola.create(newIsola, (err, data) => {
        if (err) {
            res.status(400).json({
                status: 'Fail',
                message: 'Isola could not be created'
            })
        } else {
            res.send('Isola has been created successfuly');
        }

    })

}

/*Editing the User*/
exports.editIsola = (req, res) => {
    let id = req.params.id;

    const updateIsola = {
        nome: req.body.nome,
        descrizione: req.body.decr,
        dimensioneGriglia: req.body.dimGr,
        dimensioneMediaPacco: req.body.dimMedPacco,
        dimensioneMinPacco: req.body.dimMinPacco,
        dimensioniMaxPacco: req.body.dimMaxPacco,
        caratteristichePacco: req.body.carattPacco,
        nPacchiMassimo: req.body.nPacchiMax,
        idMagazzino: req.body.idMag
    };

    Isola.findById(id, (err, data) => {
        if (err) {
            res.status(404).json({
                status: 'failed',
                message: 'Isola does not exist |  Invalid ID'
            });
        }
        data.replaceOne(updateIsola, err => {
            if (err) {
                res.status(500).json({
                    status: 'invalid',
                    message: 'Isola could not be edited'
                });
            } else {
                res.send('Edited');
            }
        });
    });
};

/* Removing the Isola */
exports.removeIsola = (req, res) => {
    let id = req.params.id;

    Isola.deleteOne({ _id: id }, (err, data) => {
        if (err) {
            res.status(500).json({
                status: 'fail',
                message: 'Isola could not be deleted'
            });
        } else {
            res.send('Isola deleted succesfully');
        }
    });
};