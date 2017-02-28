console.log('Questions Factory!!');
app.factory('questionsFactory', ['$http', function($http){
  
  var questions = [];
  var question = {};

function questionsFactory(){
    var _this = this;
    this.add_question = function(data,callback){
    	console.log("Question Factory!!");
        $http.post('/add_question', data).then(callback);
    } 
}//end function


  return new questionsFactory;
}]);