console.log("let_playController");
app.controller('let_playController', ['$scope','let_playFactory','$location', '$cookies','$routeParams', function($scope, let_playFactory, $location, $cookies,routeParams){
  if($cookies.get('name') == undefined){ 
      $location.url('/');
  }	
	$scope.get_questions = function(){
        let_playFactory.get_questions(function(data){
            console.log(data.data)
            var random_questions = $scope.random(data.data.question);            
            $scope.questions = data.data;
        });
    }
    $scope.get_questions();

    $scope.random = function(questions) {
    	console.log("length of questions--", questions.length)
    	for (var i = questions.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = questions[i];
	        questions[i] = questions[j];
	        questions[j] = temp;
    	}

        return questions;
    }

    $scope.submit = function() {
        $scope.score = 0;

	    if ($scope.answer_1 == undefined || $scope.answer_2 == undefined || $scope.answer_3 == undefined) {
	        $scope.errors = '** Please answer all questions **'
	        console.log("Emtpy");
	    	console.log($scope.answer_1, $scope.answer_2, $scope.answer_3);
	    } else {
	        if ($scope.answer_1.first == '1') {
	        	console.log($scope.answer_1);
	            $scope.score += 1;
	        }
	        if ($scope.answer_2.second == '1') {
	        	console.log($scope.answer_3);
	            $scope.score += 1;
	        }
	        if ($scope.answer_3.third == '1') {
	        	console.log($scope.answer_3);
	            $scope.score += 1;
	        }
	        var percentage = (($scope.score / 3) * 100);

			var result = {
				name : $scope.currentUser,
				score : $scope.score, 
				percentage : parseFloat(percentage).toFixed(1)
			}
			
			let_playFactory.submit(result, function(data){
            	console.log(data)
        	});

	        alert("That was great, "+ $scope.currentUser+ "! "+"Your score is " + $scope.score + "/3 "+ "("+parseFloat(percentage).toFixed(1)+ "%)");
	    	$location.url('/home');

	    }
	}
}]);
