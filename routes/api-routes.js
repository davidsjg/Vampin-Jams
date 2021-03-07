const db = require('../models')

module.exports = (app) => {


    app.get('/api/threads', (req, res) => {
        db.Thread.findAll().then((results) => res.response(results))
    })


    app.post('/api/post', (req, res) => {
        db.Thread.create( {
            //grab off of req.body
            author: req.body.author,
            subject: req.body.subject
        })
    })

    app.delete('/api/delete:id', (req, res) => {
        db.Thread.destroy({
            where: {
                id: req.params.id
            },
        }).then((results) => res.json(results))
    })

    // <-- UPDATE -->
    // app.put("/api/threads", (req, res) => {
    //     db.Thread.update({
    //         author: req.body.author,
    //         subject: req.body.subject
    //     },
    //     {
    //         where: {
    //             id: req.body.id
    //         }
    //     }
    //     ).then((results) => res.json(res))
    // })
}