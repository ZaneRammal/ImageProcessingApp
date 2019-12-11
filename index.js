const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 5000

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));
app.use('/caman', express.static(__dirname + '/node_modules/caman/dist'))
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'))
app.use('/jquery_script', express.static(__dirname + '/'))

app.use('public', express.static(path.join(
  __dirname,
  'static'
)))

app.get('/', (req, res) => {
  res.render('pages/index')
})
app.get('/img', (req, res) => {
  res.render('pages/img', {})
})
app.get('/about', (req, res) => {
  res.render('pages/about', {})
})
app.get('/index', (req, res) => {
  res.render('pages/index', {})
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
