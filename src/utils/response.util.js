const success = ( statusCode, data ) => {
    return {
        success: true,
        statusCode: statusCode,
        data: data
    }
}

module.exports = {
    success
}