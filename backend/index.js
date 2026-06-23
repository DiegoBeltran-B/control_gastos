const express = require('express')
const app = express()
const router = require('./routes/router')
// const cors = require('cors')
// app.use(cors())
app.use('/api', router)
app.listen (4000, () =>{
    console.log('cree un servidor web')
})
