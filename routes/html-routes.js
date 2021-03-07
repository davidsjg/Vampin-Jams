const path = require('path')
var exphbs = require('express-handlebars')

module.exports {

    app.get('/threads', (req, res) =>
        res.render("index"))
    ;
    app.get('/post', (req, res) => 
        res.resnder("post")
    )
    app.get('/search', (req, res) => 
        res.render("search"))
}