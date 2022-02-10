const { StatusCodes } = require("http-status-codes");
const Teacher = require("../model/Teacher");

const register = async (req, res) => {
	console.log(".");
	const teacher = await Teacher.create({ ...req.body });
	const token = teacher.createJWT();
	res.status(StatusCodes.CREATED).json({ teacher, token: token });
};

const login = async (req, res) => {
	const { email, password } = req.body;

	const teacher = await Teacher.findOne({ email: email });

	if (!teacher) {
		throw new UnauthenticatedError("Email does not exist");
	}

	const isPasswordCorrect = await teacher.comparePassword(password);
	if (!isPasswordCorrect) {
		throw new UnauthenticatedError("Invalid password");
	}

	const token = teacher.createJWT();
	res.status(StatusCodes.OK).json({ teacher, token: token });
};

module.exports = { register, login };
