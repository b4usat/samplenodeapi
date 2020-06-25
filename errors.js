exports.InvalidError = class InvalidError extends Error {
    constructor(message = 'Invalid Request') {
        super(message)
        Error.captureStackTrace(this, InvalidError)
        this.status = 400
        this.statusCode = 400
        this.name = 'Invalid Request'
    }
}

exports.ServiceError = class ServiceError extends Error {
    constructor(message = 'Internal Server Error') {
        super(message)
        Error.captureStackTrace(this, InvalidError)
        this.status = 500
        this.statusCode = 500
        this.name = 'Internal Server Error'
    }
}

