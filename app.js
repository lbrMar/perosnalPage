// Import required modules
const express = require('express')
const path = require('path')

// Create an express application
const app = express()
const port = process.env.PORT || 3000

// serve static files from the public/build directory
app.use(express.static(path.join(__dirname, 'client/dist')))

// Add routes to serve files from
app.get("/", (req, res) => { 
  res.sendFile(path.join(__dirname, 'client/dist', 'index.html'))
})

// Start the server
app.listen(port, () => {
console.log(`App has started on port: ${port}`)
})
