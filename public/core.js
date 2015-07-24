var app = angular.module("cmb", ["ngRoute"])

app.config(function($routeProvider){
	$routeProvider.
		when("/", {
			templateUrl: "landing.html"
		}).
		when('/contact', {
			templateUrl: "contact.html"
		}).
		when("/stack", {
			templateUrl: "stack.html"
		}).
		when("/about", {
			templateUrl: "about.html"
		}).
		when("/portfolio", {
			templateUrl: "portfolio.html",
			controller: "PortfolioIndexController",
			controllerAs: "portfolioController"
		}).
		otherwise({ redirectTo: "/"});
});
