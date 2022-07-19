let express = require('express');
const employeeController = require('../controller/employeeController');
const employeeFileUpload = require('../middleware/employeeFileUpload');

const router = express.Router();

router.post(
    '/upload',
    employeeFileUpload.upload().single('file'),
    employeeController.fileUpload
);

router.get('/all', employeeController.getAll);

router.get('/employee/:id', employeeController.getOne);

router.post('/create', employeeController.createEmployee);

router.post('/filter', employeeController.filter);

module.exports = router;
