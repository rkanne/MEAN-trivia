console.log('questions model');
var mongoose = require('mongoose');
var questionsSchema = new mongoose.Schema({
    question: {
    	type: String, required: true, minlength: 15
    },
    correct_answer: {
    	type: String, required: true
    },
    fake_answer_1: {
    	type: String, required: true
    },
    fake_answer_2: {
    	type: String, required: true
    }
}, 
  {
      timestamps: true
  });

var Question = mongoose.model('Question', questionsSchema);