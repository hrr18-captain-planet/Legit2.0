// var Sequelize = require('sequelize');
// var Promise = require('bluebird');
// var bcrypt = require('bcrypt-nodejs');
// var db = require('../database_config.js');
//
// var Student = db.define('User', {
//   email: Sequelize.STRING, //verify email
//   password: Sequelize.STRING,
//   first: Sequelize.STRING,
//   last: Sequelize.STRING
// },
// {
//   instanceMethods: {
//     comparePassword: function (attemptedPassword, callback) {
//       bcrypt.compare(attemptedPassword, this.password, function (err, isMatch) {
//         if (err) { throw err; }
//         callback(null, isMatch);
//       });
//     }
//   }
// });
//
// Student.beforeCreate(function (user) {
//   var cipher = Promise.promisify(bcrypt.hash);
//   return cipher(user.password, null, null)
//     .then(function (hash) {
//       user.password = hash;
//     });
// });
//
// module.exports = Student;


var Sequelize = require('sequelize');
var db = require('../database_config.js');

var Student = db.define('Student', {
  first: Sequelize.STRING,
  last: Sequelize.STRING
});

module.exports = Student;
