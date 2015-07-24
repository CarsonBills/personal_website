var app = angular.module("cmb", ["ngRoute"])

app.config(function($routeProvider){
	$routeProvider.
		when("/", {
			templateUrl: "portfolio.html",
		}).
		when('/contact', {
			templateUrl: "contact.html"
		}
	);
})
