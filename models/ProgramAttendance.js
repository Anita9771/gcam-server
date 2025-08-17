const mongoose = require("mongoose");

const programAttendanceSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  program: String,
  minister: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("ProgramAttendance", programAttendanceSchema);
