var app = require('./../server.js');

var burger = require('./../models/burgers.js');

module.exports = function(app) {
  app.get('/', function(req, res) {
    burger.findAll({}).then(function(results){
      res.render("index", {burgers: results});
    })
  });

  app.post('/', function(req, res){
    burger.create({
      burger_name:req.body.newestBurger
    }).then(function(){
        res.redirect('/');
    })
  });

  app.post('/delete/:id', function(req, res){
    burger.update({
      devoured:1
    }, {
        where: {
          id: req.params.id
        }
    }).then(function(){
        res.direct('/');
    })
  });
}