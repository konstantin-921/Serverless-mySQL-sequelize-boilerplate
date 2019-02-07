# Serverless framework with MySQL + Sequelize

This will be a guide+boilerplate on getting started on with Serverless + MySQL with Sequelize (ORM for NodeJS)

Get yourself a serverless REST API up with connected to a MySQL server in a few minutes on NodeJS.

# Guide

First Install and configure Serverless https://github.com/serverless/serverless#quick-start

Then install mysql
```javascript
npm install sequilize --save 
npm instal mysql2 --save
```

MySQL Configuration
```javascript
var sequelize = new Sequelize('DB_NAME', 'root', 'root', {
    host: 'localhost', port: '3306',
    dialect: 'mysql',
});
```


# More information

Serverless - https://github.com/serverless/serverless

Sequelize Documentation - http://docs.sequelizejs.com/
