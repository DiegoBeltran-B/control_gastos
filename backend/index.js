const express = require('express')
const app = express()
const router = require('./routes/router')
app.use('/api', router)
app.listen (4000, () =>{
    console.log('cree un servidor web')
})
