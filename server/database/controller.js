// note to team NPC must be spelt out here

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Promise = require("bluebird");
// var bcrypt = require('bcrypt');
// var SALT_WORK_FACTOR = 10;

const Assignment = require('./models/assignment.js');
const Section = require('./models/section.js');
const Student = require('./models/student.js');
const User = require('./models/user.js');

var Student_O = new Schema({
  score: Number
});

var Student_Outcomes = mongoose.model("Student_Outcomes", Student_O);


module.exports = {
  enrol: function(req, res){
    Student.findOne({
      id: req.body.students
    }).then(function(err, student){
      if (student) {
        return student.addSections(req.body.classes);
      } else {
        console.log('no matching student record found');
        return res.sendStatus(404);
      }
    })
    res.sendStatus(201);
  }

  // outcome: function(req, res){
  //
  // },

  // all: function(req, res){
  //
  // }
};
