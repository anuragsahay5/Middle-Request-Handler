const buildErrorJSON = async(response) => {
    return {
        "error": true,
        "status": response.status,
        "statusText": response.statusText,
        "message": await response.text()
    }
}

module.exports = {buildErrorJSON}