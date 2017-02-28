var path = require('path');
var users = require('./../controllers/users.js');
var questions = require('./../controllers/questions.js');
var play = require('./../controllers/plays.js');

console.log('routes');

module.exports = function(app) {
	app.get('/', users.index);
	app.post('/register', users.register);
	app.post('/logout', users.logout);
	app.post('/login', users.login);
	app.get('/home', users.get_results);
	app.post('/add_question', questions.add_question);
	app.post('/submit', play.submit);
	app.get('/lets_play', play.get_questions);

}
