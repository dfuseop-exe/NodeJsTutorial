const express = require('express')
const fs = require('fs');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const data = fs.readFileSync('index.html')
  res.end(data.toString())
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})