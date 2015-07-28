angular.module("cmb")
.controller("PortfolioIndexController", function($http){
	var controller = this;
	$http({method: "GET", url: "/api/portfolio"}).success(function(data){
		controller.projects = data;
	});
})

.controller("ProjectShowController", function($http, $routeParams){
	var controller = this;
	$http({method: "GET", url: "/api/projects/" + $routeParams.id})
	.success(function(data){
		controller.project = data;
		console.log(data)
	});
});