const buildHeader = (req_headers, fallback = {}) => {
    try {
        return JSON.parse(req_headers)
    } catch (error) {
        return fallback
    }
}

module.exports = {buildHeader}