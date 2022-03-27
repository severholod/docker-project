const express = require('express')
const { MongoClient } = require('mongodb')
const app = express()
const PORT = 3000
const URL = 'mongodb://mongo:27017'

const client = new MongoClient(URL)
const run = async () => {
  try {
    await client.connect()
    const db = client.db('root')
    const collection = db.collection('users')
    const user = {firstName: 'Tom', lastName: 'House', age: '42', position: 'manager'}
    const res = await collection.insertOne(user)
    return res
  } catch (e) {
    console.error(e)
  } finally {
    await client.close()
  }
}

app.get('/', async (req, res) => {
  const response = await run()

  console.log(response)
  res.send('Hello World!23!!')
})


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

