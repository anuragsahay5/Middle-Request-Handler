const buildURL = (req_url, req_query) => {
    return req_query ? req_url + "?" + req_query : req_url;
}

module.exports = {buildURL}