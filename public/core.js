var app = angular.module("cmb", ["ngRoute"])

app.config(function($routeProvider){
	$routeProvider.
		when("/", {
			templateUrl: "landing.html"
		}).
		when('/contact', {
			templateUrl: "contact.html"
		}).
		when("/portfolio", {
			templateUrl: "portfolio.html",
			controller: "PortfolioIndexController",
			controllerAs: "portfolioController"
		}).
		otherwise({ redirectTo: "/"});
});
