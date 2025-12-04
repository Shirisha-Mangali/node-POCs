const express = require('express')
const axios = require('axios')
const app = express()

app.get('/case1', async (req, res) => {
  try {
    console.log("Request received for /case1")

    // Start both API calls simultaneously
    const apiA = axios.get('https://jsonplaceholder.typicode.com/posts/1')
    const apiB = axios.get('https://jsonplaceholder.typicode.com/users/1')

    // Wait for both to finish
    const [resA, resB] = await Promise.all([apiA, apiB])

    // Validation
    if (!resA.data || !resB.data) {
      return res.status(400).json({ message: "Invalid API response" })
    }

    res.json({
      status: "success",
      fromPosts: resA.data,
      fromUsers: resB.data,
    })
  } catch (err) {
    console.error("Error:", err)
    res.status(500).json({
      error: "Failed to process request",
      details: err.message
    })
  }
})

app.listen(3000, () =>
  console.log("Case 1 server running at http://localhost:3000/case1")
)
