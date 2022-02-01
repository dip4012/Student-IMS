require("dotenv").config()
require("express-async-errors")

const express = require("express")
const app = express()

const connectDB = require("./db/connect")

//middlewares
const authenticator = require("./middleware/aunthentication")
const errorHandlerMiddleware = require("./middleware/error_handler")

//routes
const studentAuthRouter = require("./routes/studentAuth")
const studentUtilitiesRouter = require("./routes/studentUtilities")
const teacherAuthRouter = require("./routes/teacherAuth")
const teacherUtilitiesRouter = require("./routes/teacherUtilities")

app.use(express.json())

app.use("/ims/student/auth", studentAuthRouter)
app.use("/ims/student/details", authenticator, studentUtilitiesRouter)

app.use("ims/teacher/auth", teacherAuthRouter)
app.use("ims/teacher/details", authenticator, teacherUtilitiesRouter)

app.use(errorHandlerMiddleware)

const port = process.env.PORT || 8080
const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI)
		app.listen(port, console.log(`Server listening at port ${port}`))
	} catch (error) {
		console.log(error)
	}
}

start()
