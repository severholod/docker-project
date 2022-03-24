const fs = require('fs')
const path = require('path')
const express = require('express')
const MongoClient = require('mongodb').MongoClient
const app = express()
const port = 3000

const logFile = path.resolve(__dirname, './express.log')

function writeToLog(message) {
  fs.writeFileSync(logFile, message.toString())
}

MongoClient.connect('mongodb://root:root@localhost:27017/testify', (err, database) => {
  if (err) {
    return writeToLog(err)
  } else {
    return writeToLog('success')
  }
})

app.get('/', (req, res) => {
  res.send('Hello World!23!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

