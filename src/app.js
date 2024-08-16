const express = require('express')
const app = express()
// const route = new express.Router()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const index = require('./routes/index')
app.use('/', index)

module.exports = app;