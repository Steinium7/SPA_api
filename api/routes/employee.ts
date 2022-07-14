let express = require('express');
const employeeController = require('../controller/employeeController');
const multer = require('multer');
const router = express.Router();

// To send files to the backend

var storage = multer.diskStorage({
    destination: function (req: any, file: any, cb: any) {
        cb(null, './uploads');
    },
    filename: function (req: any, file: any, cb: any) {
        cb(null, 'employees.txt');
    },
});
var upload = multer({ storage: storage });

router.post('/upload', upload.single('file'), (req: any, res: any) => {
    res.json({ file: req.file });
});

router.get('/all', employeeController.getAll);

router.get('/employee/:id', employeeController.getOne);

router.post('/create', employeeController.createEmployee);

router.post('/filter', employeeController.filter);

module.exports = router;
