const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
  res.send("HELLO WORKING")
})

app.listen(5000, () => console.log("Test server on 5000"))
