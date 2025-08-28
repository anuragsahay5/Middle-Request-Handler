const header_builder = require("../utils/header_builder")
const url_builder = require("../utils/url_builder")
const error_builder = require("../utils/error_response_builder")

const getProxyHandle = async (req, res) => {
    try {
        const { req_url, req_query, req_headers } = req.headers;

        const URL = url_builder.buildURL(req_url,req_query)
        const HEADERS = header_builder.buildHeader(req_headers)

        const response = await fetch(URL, { headers: HEADERS, method: "GET" })

        if (!response.ok) {
            const ERROR_JSON = await error_builder.buildErrorJSON(response);
            return res.status(response.status).send(JSON.stringify(ERROR_JSON))
        }
        return res.send(await response.text())
    } catch (error) {
        res.status(500).send(JSON.stringify({
            "error": true,
            "message": error.message
        }))
    }
}

module.exports = getProxyHandle