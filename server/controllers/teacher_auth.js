const { StatusCodes } = require("http-status-codes")
const Teacher = require("../model/Teacher")

const register = async (req, res) => {
	const teacher = await Teacher.create({ ...req.body })
	const token = Teacher.createJWT()
	res.status(StatusCodes.CREATED).json({ name: teacher.name })
}

const login = async (req, res) => {
	const { email, password } = req.body

	const teacher = await Teacher.findOne({ email: email })

	if (!teacher) {
		throw new UnauthenticatedError("Email does not exist")
	}

	const isPasswordCorrect = await Teacher.comparePassword(password)
	if (!isPasswordCorrect) {
		throw new UnauthenticatedError("Invalid password")
	}

	const token = Teacher.createJWT()
	res.status(StatusCodes.OK).json({ name: teacher.name })
}

module.exports = { register, login }
