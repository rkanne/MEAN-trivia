var mongoose = require('mongoose'),
    Question = mongoose.model('Question');

function QuestionsController(){
    var _this = this;

    this.add_question = function(req, res) {
        var new_Question = new Question(req.body);
        console.log("req.body--", req.body);
        new_Question.save(function(err) {
            if(err) {
                res.json(err);
            } else {
                res.json({question: new_Question});
            }
        })
    }
}
module.exports = new QuestionsController();
