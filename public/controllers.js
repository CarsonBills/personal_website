angular.module("cmb")
.controller("PortfolioIndexController", function($http){
	var controller = this;
	$http({method: "GET", url: "/api/projects"}).success(function(data){
		controller.projects = data;
	});
});