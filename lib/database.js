const Sequelize = require('sequelize');

var sequelize = new Sequelize('test', 'root', 'abcd23021988', {
    host: 'localhost', port: '3306',
    dialect: 'mysql',
});

module.exports = sequelize;