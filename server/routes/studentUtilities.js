const express = require("express")
const router = express.Router()

const {
	getStudentDetail,
	updateStudentDetail,
} = require("../controllers/student_utilities")

router.route("/").get(getStudentDetail).patch(updateStudentDetail)

module.exports = router
