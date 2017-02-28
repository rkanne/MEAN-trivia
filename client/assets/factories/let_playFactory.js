console.log('Let play Factory!!');
app.factory('let_playFactory', ['$http', function($http){
  
var plays = [];
var play = {};

function let_playFactory(){
    var _this = this;   
   this.get_questions = function(callback){
        $http.get('/lets_play').then(function(returned_data){
        callback(returned_data);
      });
    }  
    this.submit = function(data, callback){
    	console.log("I am in let play Factory!!");
        $http.post('/submit', data).then(callback);
    } 

}//end function

return new let_playFactory;

}]);