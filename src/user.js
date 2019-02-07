const sequelize = require('../lib/database.js');
const Sequelize = require('sequelize');

const User = require("../models/user.js")(sequelize, Sequelize);
// TODO: resole promise / async function
// possible race condition
User.sync();

const getAll = async (event, ct, callback) => {
  let response = {};
  try {
    const data = await User.findAll({raw: true})
    if(!data.length) {
      response = {
        statusCode: 200,
        body: JSON.stringify({message: "Users not found"}),
      };
    } else {
      response = {
        statusCode: 200,
        body: JSON.stringify(data),
      };
    }
    callback(null, response);
  } catch(error) {
    callback(null, error);
  }
};

const deleteById = (event, ctx, cb) => {
    const body = event.body ? event.body : {};
    const data = JSON.parse(body);
    const { id } = data;
    const response = {
        statusCode: 200,
        body: {},
    };
    User.destroy({ where: {id} }).then(deleted => {
        response.body = {
            data: deleted,
            status: true,
        };
    }).catch(error => {
        if (error) {
            console.log(error);
        }
    })
    .finally(() => {
        cb(null, JSON.stringify(response));
    })
}

const create = (event, ctx, cb) => {
    const body = event.body ? event.body : {};
    const data = JSON.parse(body);

    const response = {
        statusCode: 200,
        body: {},
    };
    const {
        fullName,
        shortName,
        homeGround,
        logo,
        staff,
        description,
    } = data;
    User.create({
        full_name: fullName,
        short_name: shortName,
        home_ground: homeGround,
        logo: logo,
        staff: staff,
        description: description,
    })
        .then(userRecord => {
            response.body = {
                    data: userRecord,
                    status: true,
                };
        })
        .catch(error => {
            if (error) {
                console.log(error);
            }
        })
        .finally(() => {
            cb(null, JSON.stringify(response));
        })
}

const update = (event, ctx, cb) => {
    const body = event.body ? event.body : {};
    const data = JSON.parse(body);
    const response = {
        statusCode: 200,
        body: {},
    };
    const {
        fullName,
        shortName,
        homeGround,
        logo,
        staff,
        description,
        id,
    } = data;
    User.update({
        full_name: fullName,
        short_name: shortName,
        home_ground: homeGround,
        logo: logo,
        staff: staff,
        description: description,
    },{ where: {id} })
    .then(updated => {
        response.body = {
            data: updated,
            status: true,
        };
    }).catch(error => {
        if (error) {
            console.log(error);
        }
    })
    .finally(() => {
        cb(null, JSON.stringify(response));
    })
}

module.exports = {
    create,
    getAll,
    update,
    deleteById
}