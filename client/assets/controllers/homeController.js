console.log("homeController");
app.controller('homeController', ['$scope','usersFactory', 'let_playFactory','$location', '$cookies','$routeParams', function($scope, usersFactory, let_playFactory, $location, $cookies,routeParams){
$scope.new = {};
$scope.cookies = {};
console.log($cookies.get('name'));
  if($cookies.get('name') == undefined){ 
      $location.url('/');
  }
$scope.user_id = $cookies.get('user_id');
// var cookies = $cookies.getAll();
  get_results = function(){
    console.log("======get_results=======");
       $scope.currentUser = $cookies.get('name');
        usersFactory.get_results($scope.results, function(data){
          if (data.data.errors){
            $scope.errors = data.data.errors;
          }else{
            $scope.currentUser = $cookies.get('name');
            $scope.results = data.data.results;
          }
        });
    }

  $scope.play = function(){
    $location.url('/lets_play');
  }
  
  $scope.logout = function(){
    console.log("inside logout");
    usersFactory.logout($scope.user, function(data){
      $cookies.remove('name');
      $location.url('/');
    });
  }

  get_results();

}]);