const http = require('http');
const path = require('path')
const fs = require("fs")
const express = require('express')
const PORT = process.env.PORT || 5000

express()
.use(express.static(__dirname + '/public'))
.use(express.static(path.join(__dirname, 'views')))
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'ejs')
.get('/', (req, res) => res.render('pages/index'))
.get('/img', function(req, res) {
  res.render('pages/img', {})
})
.get('/about', function(req, res) {
  res.render('pages/about', {})
})
.get('/index', function(req, res) {
  res.render('pages/index', {})
})

.use('/caman', express.static(__dirname + '/node_modules/caman/dist'))
.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'))
.use('/jquery_script', express.static(__dirname + '/'))
.listen(PORT, () => console.log(`Listening on ${ PORT }`))
