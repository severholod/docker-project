const express = require('express')
const bodyParser = require('body-parser')

const db = require('./db')
const router = require('./router')

const app = express()
const PORT = 3000


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api', router)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))