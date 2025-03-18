class ApiError extends Error {
    constructor(
        statusCde,
        message = "Somethig went wrong",
        errors = [],
        statck = ""
    ) {
        super(message)
        this.statusCode = statusCode
        this.data = null,
        this.message
        this.success = false,
        this.errors = this.errors
        
        if (statck) {
            this.stack = statck
        } else {
            Error.captureStackTrace(this.constructor)
        }
    }
}

export { ApiError }