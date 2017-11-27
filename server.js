const express = require('express')
const multer = require('multer')
const config = require('./config')
const upload = multer({ dest: 'uploads/' })
const app = express()
const parser = require('body-parser')

app.use(parser.urlencoded({ extended: false}))
app.use(parser.json())

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/api/upload', upload.single('myfile'), (req, res) => {
  
  res.json({size: req.file.size})
})

app.listen(config.port, _ => console.log('listening on port ', config.port))