const express = require('express')
const mysql = require('mysql2/promise')

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

app.get('/hello-world', (req, res) => {
  res.send('hello world')
})

// path = GET /users สำหรับ get users ทั้งหมดที่บันทึกเข้าไปออกมา
app.get('/users', async (req, res) => {
  const [results] = await conn.query('SELECT * FROM users')
  res.json(results)
})

app.listen(port, async () => {
  await initMySQL()
  console.log(`Server running at http://localhost:${port}/`)
})