const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const message = new Schema({
  teacher_id: String,
  student_id: String,
  message: String,
  date: {type: Date, default: Date.now}
});

const Message = mongoose.model("Message", message);

module.exports = Message;
//