const header_builder = require("../utils/header_builder")
const url_builder = require("../utils/url_builder")
const error_builder = require("../utils/error_response_builder")

const postProxyHandle = async (req, res) => {
    try {
        const { req_url, req_query, req_headers } = req.headers;
        const req_body = req.body;
        
        const URL = url_builder.buildURL(req_url,req_query);
        const HEADERS = header_builder.buildHeader(req_headers);
        const BODY = JSON.stringify(req_body)

        const FINAL_HEADER = { "Content-Type": "application/json", ...HEADERS };
        const response = await fetch(URL, { headers: FINAL_HEADER, method: "POST", body: BODY })

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

module.exports = postProxyHandle