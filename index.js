const express = require('express')
const mysql = require('mysql2/promise')
const sequelize = require('./config/db');
const router = require('./routes/products');

const app = express()
const port = 8000

conn = null

const initMySQL = async () => {
  conn = await mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'tutorial'
  })
}

app.use(express.json())

app.use(router)

app.listen(port, async () => {
  await initMySQL()
  await sequelize.sync()
  console.log(`Server running at http://localhost:${port}/`)
})