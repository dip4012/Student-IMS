const express = require("express")
const router = express.Router()

const {
	getTeacherDetail,
	updateTeacherDetail,
	getAllStudents,
	getStudent,
	updateStudentMarks,
} = require("../controllers/teacher_utilities")

router.route("/").get(getTeacherDetail).patch(updateTeacherDetail)
router.route("/students/:class/:sec").get(getAllStudents)
router
	.route("/students/:class/:sec/:roll")
	.get(getStudent)
	.patch(updateStudentMarks)

module.exports = router
