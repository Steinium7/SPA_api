let express = require('express')
const employeeController = require('../controller/employeeController')
const router = express.Router()


router.get('/all/:page', employeeController.getAll)

router.get('/all', employeeController.getAll)

router.get('/employee/:id', employeeController.getOne)

router.post('/create', employeeController.createEmployee)

router.get('/create', employeeController.creationPage)

router.post('/filter', employeeController.filter)

router.post('/sort/:page', employeeController.sort)

router.get('/sort/:page', employeeController.sort)



module.exports = router;