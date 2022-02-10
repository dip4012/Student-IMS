const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const TeacherSchema = new mongoose.Schema({
	name: {
		type: String,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	gender: {
		type: String,
		enum: ["Male", "Female", "Prefer not to say"],
		default: "Prefer not to say",
	},
	email: {
		type: String,
		unique: true,
		required: true,
	},
	phone: {
		type: Number,
		unique: true,
		required: true,
	},
	hobby: {
		type: String,
		default: "Prefer not to say",
	},
	qualification: {
		type: String,
		required: true,
		enum: ["B.Tech", "M.Tech", "B.Sc", "M.Sc", "Phd"],
	},
});

TeacherSchema.pre("save", async function () {
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

TeacherSchema.methods.createJWT = function () {
	const token = jwt.sign(
		{ userId: this._id, name: this.name },
		process.env.JWT_SECRET,
		{ expiresIn: process.env.JWT_LIFETIME }
	);
	return token;
};

TeacherSchema.methods.comparePassword = async function (enteredPassword) {
	const isMatch = await bcrypt.compare(enteredPassword, this.password);
	return isMatch;
};

module.exports = mongoose.model("Teacher", TeacherSchema);
