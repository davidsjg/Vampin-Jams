const Sequelize = require("sequelize")

const sequelize = new Sequelize("thread", "root", "Colorado23", {
    host: "localhost",
    port: 9696,
    dialect: "mysql",
    pool: { 
        max: 5,
        min: 0,
        idle: 10000,
    },
})

module.exports = sequelize