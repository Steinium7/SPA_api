let express = require('express')
const app = express()
const cors = require('cors')
const employees = require('./routes/employee')

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true}))

app.use('/api',employees)

let port  = process.env.PORT || 3000
app.listen(port, ()=>{console.log(`Listening on Port ${port}`)})

export {}