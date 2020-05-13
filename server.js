const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = process.env.PORT || 8000
const todoRoutes = express.Router()
const path = require('path')
const todos = require('./api/users')
require('./database')

app.use(cors())
app.use(bodyParser.json())


app.use('/todos', todos)

app.use(express.static(path.join(__dirname, "client", "build")));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})

app.listen(PORT, function () {
    console.log(`Server running on port: ${PORT}`)
})