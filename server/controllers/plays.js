var mongoose = require('mongoose'),
    Question = mongoose.model('Question');
    Result = mongoose.model('Result');

function let_playController(){
    var _this = this;

    this.get_questions = function(req, res) {
        Question.find({}, function(err, questions) {
            if (err) {
                res.json(err);
            } else {
                res.json({question:questions});
            }

        });
    }


    this.submit = function(req, res) {
        console.log("submit");
        var new_Result = new Result(req.body);
        new_Result.save(function(err) {
            if(err) {
                res.json({err});
            } else {
                res.json({result: new_Result});
            }
        })
    }

}
module.exports = new let_playController();
