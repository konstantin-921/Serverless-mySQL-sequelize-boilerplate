'use strict';
var user = require("./src/user");

module.exports.usersAll = (event, context, callback) => {
  user.getAll(event, context, callback);
};

module.exports.createUser = (event, context, callback) => {
  user.create(event, context, callback);
};

module.exports.deleteById = (event, context, callback) => {
  user.deleteById(event, context, callback);
};

module.exports.updateUser = (event, context, callback) => {
  user.update(event, context, callback);
};
