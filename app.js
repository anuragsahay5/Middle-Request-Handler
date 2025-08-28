const express = require('express')
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())

const auth_middleware = require("./utils/auth_middleware")

const api_router = require("./api")
app.use("/api",auth_middleware,api_router);


app.get('/', (req, res) => res.send(process.env.A5_RESPONSE))

module.exports = app
