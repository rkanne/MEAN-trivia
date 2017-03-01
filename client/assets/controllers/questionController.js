console.log("questionController");
app.controller('questionController', ['$scope','questionsFactory','$location', '$cookies','$routeParams', function($scope, questionsFactory, $location, $cookies,routeParams){
if($cookies.get('name') == undefined){ 
  $location.url('/');
}
$scope.message = '';
$scope.add_question = function(){
	console.log("I am inside add Question");

	    if($scope.question == undefined){
	    	console.log("undefined")
	    	$scope.errors = '** Please insert information.';
	  	}else if ($scope.question != undefined){
		  	console.log("Not Undefined",$scope.question.question)
		  	if ($scope.question.question.length < 15) {
				$scope.message_question = 'Question must be at least 15 characters';
				$location.url('/new_question');
			}else if ($scope.question.correct_answer == undefined ) {
				$scope.message_correct_answer = 'Correct answer can not be blank!';
			} else if ($scope.question.fake_answer_1 == undefined ) {
				$scope.message_fake_answer_1 = 'Fake Answre 1 can not be blank!';
			} else if ($scope.question.fake_answer_2 == undefined ) {
				$scope.message_fake_answer_2 = 'Fake Answre 2 should not be blank!';
	    		$location.url('/new_question');
	    	}else{
			questionsFactory.add_question($scope.question, function(data) {
				if(data) {
					alert('I have added question!!');
				}
				$location.url('/home');

			});

			}

	  }	
}
}]);
