module.exports = function(sequelize, DataTypes) {

const Thread = sequelize.define(
    'thread',
    {
        author: DataTypes.STRING,
        subject: DataTypes.STRING
    }
)
    return Thread;
}