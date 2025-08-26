const express = require("express")
const router = express.Router()

const getProxyHandle = require("./src/get_proxy_handler")
const postProxyHandle = require("./src/post_proxy_handler")

router.get("/", getProxyHandle)
router.post("/", postProxyHandle)

module.exports = router