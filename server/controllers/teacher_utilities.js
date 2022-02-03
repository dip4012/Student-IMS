const Teacher = require("../model/Teacher");
const Student = require("../model/Student");
const { StatusCodes } = require("http-status-codes");

const getTeacherDetail = async (req, res) => {
  const teacher = await Teacher.findById(req.user.userId);
  res.status(StatusCodes.OK).json({ teacher });
};

const updateTeacherDetail = async (req, res) => {
  const teacher = await Teacher.findOneAndUpdate(
    { _id: req.user.userId },
    req.body,
    { new: true, runValidators: true }
  );

  res.status(StatusCodes.OK).json({ teacher });
};

const getAllStudents = async (req, res) => {
  const query = {
    class: Number(req.params.class),
    sec: req.params.sec,
  };

  const students = await Student.find(query).sort("roll");
  res.status(StatusCodes.OK).json(students);
};

const getStudent = async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.status(StatusCodes.OK).json(student);
};

const updateStudentMarks = async (req, res) => {
  const student = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  student.save();

  res.status(StatusCodes.OK).json(student);
};

module.exports = {
  getTeacherDetail,
  updateTeacherDetail,
  getAllStudents,
  getStudent,
  updateStudentMarks,
};
