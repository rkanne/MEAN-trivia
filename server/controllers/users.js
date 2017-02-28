var mongoose = require('mongoose'),
    User = mongoose.model('User');

function usersController() {
    var _this = this;
    this.index = function(req, res) {
        res.json({
            future: 'index'
        });
    };
    this.logout = function(req, res) {
        res.json({
            future: 'logout'
        });

    }
     this.user = function(req, res) {
        res.json({
            future: 'user'
        });

    }

    this.get_results = function(req, res) {
        Result.find({}, function(err, results) {
            if (err) {
                res.json(err);
            } else {
                res.json({results});
            }

        });
    }
    
    this.login = function(req, res) {
        // console.log("-----name----", req.body.name);
       User.findOne({name: req.body.name}, function(err, data) {
            if(err){
                res.json({
                        errors: {
                            login_reg: {
                                message: "Name is invalid!"
                            }
                        },
                        name: "Validation error"
                    }
                );
            }
            else{
                // console.log("-------null----", data);
                if(data === null){
                     res.json({
                        errors: "Name is invalid!!"
                    });
                }else{
                res.json({data});
                }
            }
        })
    }

    this.register = function(req, res) {
        var user = new User(req.body);
        user.save(function(err, newuser) {
            if (err){
              res.json(err);
            }
            else{
            res.json({
                _id: newuser._id,
                name: newuser.name
            });
          }
        });
    }
}

module.exports = new usersController();