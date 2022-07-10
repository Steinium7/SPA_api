let express = require('express')
const app = express()
const employees = require('./routes/employee')

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.set('view engine', 'pug')
app.set('views','./views')

app.use('/api',employees)

let port  = process.env.PORT || 3000
app.listen(port, ()=>{console.log(`Listening on Port ${port}`)})

export {}