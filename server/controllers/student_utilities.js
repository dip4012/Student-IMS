const Student = require("../model/Student");
const { StatusCodes } = require("http-status-codes");

const getStudentDetail = async (req, res) => {
	const student = await Student.findById(req.user.userId);
	res.status(StatusCodes.OK).json(student);
};

const updateStudentDetail = async (req, res) => {
	// console.log(req.body);
	const student = await Student.findOneAndUpdate(
		{ _id: req.user.userId },
		req.body,
		{
			new: true,
			runValidators: true,
		}
	);

	// console.log(student);

	res.status(StatusCodes.OK).json(student);
};

module.exports = { getStudentDetail, updateStudentDetail };
