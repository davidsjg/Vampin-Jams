const Sequelize = require("sequelize");

const seq = require("../config");

var thread = seq.define('thread', {
    Subject: {
        type: Sequelize.STRING
    },
    Author: {
        type: Sequelize.STRING
    }
})

thread.sync({force: true}).then(function() {

    return thread.create({
        Subject: "Crazy Neighbor 2",
        Author: "cactus_guise"
    })

})




// thread.findAll({
//     order: [[sequelize.col('CreateTime'), 'DESC']]
// })