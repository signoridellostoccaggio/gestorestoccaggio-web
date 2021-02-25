var express = require('express');

var router = express.Router();

const isolaController = require('../controller/isolaController')

router.route('/isola')
      .get(isolaController.getAllIsola);

router.route('/isola/create')
      .post(isolaController.createIsola);

router.route('/isola/:id/edit')
      .post(isolaController.editIsola);

router.route('/isola/:id/delete')
      .delete(isolaController.removeIsola)

module.exports = router;
