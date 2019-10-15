const express = require('express')
const config = require('./config')
const app = express()
const router = require('./router');

app
    .set('port',process.env.PORT)
    .use(express.urlencoded({extended:false}))
    .use(express.json())
    .use('/api',router)

module.exports = app
