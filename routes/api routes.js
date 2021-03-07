//dependencies 
const Thread = require('../models/thread.js')

module.exports = (app) => {

    app.get('/api/all', (req, res) => {
        Thread.findAll({}).then((results) => res.render('index', results))
    })
}