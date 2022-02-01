const { StatusCodes } = require("http-status-codes")

const errorHandlerMiddleware = async (err, req, res, next) => {
	let customError = {
		statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
		message: err.message || "Something went wrong",
	}

	res.status(customError.statusCode).json({ message: customError.message })
}

module.exports = errorHandlerMiddleware
