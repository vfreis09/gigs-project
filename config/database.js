const { Sequelize } = require('sequelize');

//Connect String
module.exports = new Sequelize('postgres://user:pass@example.com:5432/dbname');
