var app = angular.module('app', ['ngRoute','ngCookies']);
app.config(function ($routeProvider) {
// Routes to load your new and edit pages with new and edit controllers attached to them!
	$routeProvider
	 	.when('/',{
            templateUrl: 'partials/main.html',
            controller: 'usersController'
        })
        .when('/home',{
            templateUrl: 'partials/home.html'
        })
        .when('/register',{
            templateUrl: 'partials/main.html',
            controller: 'usersController'
        })
        .when('/login',{
            templateUrl: 'partials/main.html'
        })
         .when('/logout',{
            templateUrl: 'partials/home.html'
        })
         .when('/new_question',{
            templateUrl: 'partials/new_question.html'
        }) 
        .when('/add_question',{
            templateUrl: 'partials/new_question.html',
            controller: 'questionController'
        }) 
        .when('/lets_play', {
            templateUrl: 'partials/let_play.html',
            controller: 'homeController'
        }) 
        .when('/submit',{
            templateUrl: 'partials/submit.html',
            controller: 'let_playController'
        }) 
        .when('/get_results',{
            templateUrl: 'partials/home.html',
            controller: 'homeController'
        })         
        .otherwise({
          redirectTo: '/'
        });
    });