console.log('Users Factory!!');
app.factory('usersFactory', ['$http', function($http) {
  // constructor for our factory
  var users = [];
  var user = {};
  function usersFactory(){
      var _this = this;
      this.index = function(data,callback){
        $http.get('/',data).then(callback);
      } 
      this.get_results = function(data, callback){
        $http.get('/home',data).then(callback);
      }
      this.register = function(data,callback){
        $http.post('/register',data).then(callback);
      } 
      this.login = function(data, callback){
        $http.post('/login', data).then(callback);
      }
      this.logout = function(data, callback){
        $http.post('/logout', data).then(callback);
      } 
      this.all_users = function(data, callback){
      $http.get('/home', data).then(function(returned_data){
      console.log("home return===",returned_data);
      callback(returned_data);
      });

    };
 
    };

  
  return new usersFactory;
}]);
