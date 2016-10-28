
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
				controller: 'MainController',
				templateUrl: 'html/main.html'
		});

	return myApp;
});
