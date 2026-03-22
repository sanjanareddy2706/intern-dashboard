const mongoose = require("mongoose");

const internSchema = new mongoose.Schema({
  name: String,
  role: String,
  referralCode: String,
  donations: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    default: "Active"
  }
});

module.exports = mongoose.model("Intern", internSchema);