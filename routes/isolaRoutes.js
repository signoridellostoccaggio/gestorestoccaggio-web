var express = require('express');
var router = express.Router();
const isolaController = require('../controller/isolaController')

router.route('/isola')
      .get(isolaController.getAllIsola)

module.exports = router;
