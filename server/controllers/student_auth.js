const { StatusCodes } = require("http-status-codes");
const Student = require("../model/Student");

const register = async (req, res) => {
	const student = await Student.create({ ...req.body });
	const token = student.createJWT();
	res.status(StatusCodes.CREATED).send(student._id);
};

const login = async (req, res) => {
	const { email, password } = req.body;

	const student = await Student.findOne({ email: email });

	if (!student) {
		throw new UnauthenticatedError("Email does not exist");
	}

	const isPasswordCorrect = await student.comparePassword(password);
	if (!isPasswordCorrect) {
		throw new UnauthenticatedError("Invalid password");
	}

	const token = student.createJWT();
	res.status(StatusCodes.OK).send(student._id);
};

module.exports = { register, login };
