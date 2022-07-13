let express = require('express')
const employeeController = require('../controller/employeeController')
const router = express.Router()

// To send files to the backend
router.post('/file',()=>{})

router.get('/all', employeeController.getAll)

router.get('/employee/:id', employeeController.getOne)

router.post('/create', employeeController.createEmployee)

router.post('/filter', employeeController.filter)


module.exports = router;