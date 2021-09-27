const { Router } = require('express');
const ApiController = require('../controllers/apiController');
const {validate_file} = require('../middlewares/validate-endpoints');

const router = Router();


router.post('/',
    //middlewares
    validate_file,
    ApiController.recorreExcel
);

module.exports = router;