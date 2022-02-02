const Teacher = require("../model/Teacher")
const Student = require("../model/Student")
const { StatusCodes } = require("http-status-codes")

const getTeacherDetail = async (req, res) => {
	const teacher = await Teacher.findById(req.user.userId)
	res.status(StatusCodes.OK).json({ teacher })
}

const updateTeacherDetail = async (req, res) => {
	const teacher = await Teacher.findOneAndUpdate(
		{ _id: req.user.userId },
		req.body,
		{ new: true, runValidators: true }
	)

	res.status(StatusCodes.OK).json({ teacher })
}

const getAllStudents = async (req, res) => {
	const query = {
		class: Number(req.params.class),
		sec: req.params.sec,
	}

	const students = await Student.find(query).sort("roll")
	res.status(StatusCodes.OK).json(students)
}

const getStudent = async (req, res) => {
	const query = {
		class: req.params.class,
		sec: req.params.sec,
		roll: req.params.roll,
	}

	const student = await Student.find(query)
	res.status(StatusCodes.OK).json(students)
}

const updateStudentMarks = async (req, res) => {
	const query = {
		class: req.params.class,
		sec: req.params.sec,
		roll: req.params.roll,
	}

	const student = await Student.findOneAndUpdate(query, req.body, {
		new: true,
		runValidators: true,
	})

	req.status(StatusCodes.OK).json(student)
}

module.exports = {
	getTeacherDetail,
	updateTeacherDetail,
	getAllStudents,
	getStudent,
	updateStudentMarks,
}
