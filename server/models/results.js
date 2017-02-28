console.log('results model');
var mongoose = require('mongoose');
var resultsSchema = new mongoose.Schema({
    name: {
        type: String, required: true
    },
    score: {
        type: Number, required: true
    },
    percentage: {
        type: Number
    }
}, 
  {
      timestamps: true
  });

var Result = mongoose.model('Result', resultsSchema);