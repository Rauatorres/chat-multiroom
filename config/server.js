const express = require('express')
const consign = require('consign')
const expressValidator = require('express-validator')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('app/public'))
app.use(expressValidator())

app.set('view engine', 'ejs')
app.set('views', 'app/views')

consign()
.include('app/routes')
.then('app/models')
.then('app/controllers')
.into(app)

module.exports = app