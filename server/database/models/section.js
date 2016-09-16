var Sequelize = require('sequelize');
var db = require('../database_config.js');

var Section = db.define('Section', {
  name: Sequelize.STRING,
  grade: Sequelize.INTEGER,
  subject: Sequelize.STRING
});
// interface for teachers to add a new class
module.exports = Section;
