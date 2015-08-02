var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

app.get("/api/projects/:id", function(req, res){
	var projects = [
		{
			id: 0,
			title: "BusyQuill",
			screenshot: "/images/busyquill.png",
			description: "BusyQuill is a game written in Sinatra that uses Backbone.js to display generated passages that maintain the tone of one of several authors.",
			technologies: ["Ruby", "Sinatra", "Javascript","JQuery", "Backbone.js"],
			links: {
				"Github": "https://github.com/CarsonBills/newclassics",
				"Launch App": "http://busyquill.herokuapp.com/" 
			}
		},
		{
			id: 1,
			title: "Seek",
			screenshot: "/images/seek.png",
			description: "Seek is a Rails Application that gathers data about a city and returns it so that user gets a snapshot idea of a possible travel destination.",
			technologies: ["Ruby", "Rails", "Javascript","JQuery"],
			links: {
				"Github": "https://github.com/mjprude/seek",
				"Launch App": "http://sightseek.herokuapp.com/" 
			}
		},
		{
			id: 2,
			title: "CB URLShort",
			screenshot: "/images/shortener.png",
			description: "CB URL Shortener is a Rails application built to reduce the length of a URL to a manageable size.",
			technologies: ["Ruby", "Rails", "Javascript","JQuery"],
			links: {
				"Github": "https://github.com/CarsonBills/shortener",
				"Launch App": "http://cmbills.herokuapp.com/" 
			}
		},
		{
			id: 3,
			title: "TacoShack",
			screenshot: "/images/tacoshack.png",
			description: "Tacoshack is a Rails application that generates silly menu items.",
			technologies: ["Ruby", "Rails", "Javascript","JQuery", "Handlebars"],
			links: {
				"Github": "https://github.com/CarsonBills/tacoshack",
				"Launch App": "#" 
			}
		},
		{
			id: 4,
			title: "Dante's Inferno",
			screenshot: "/images/inferno.png",
			description: "The Inferno is an animated application of the first Canto of Dante's Inferno animated using JQuery.",
			technologies: ["HTML", "CSS", "Javascript","JQuery"],
			links: {
				"Github": "https://github.com/CarsonBills/Dantes_Inferno",
				"Launch App": "http://carsonbills.github.io/Dantes_Inferno/" 
			}
		},
		{
			id: 5,
			title: "Bloom",
			screenshot: "/images/bloom.png",
			description: "Bloom is a customized WordPress site built to showcase the work of a brooklyn based furniture design collective.",
			technologies: ["WordPress", "CSS"],
			links: {
				"Launch App": "http://104.131.196.163/" 
			}
		},
		{
			id: 6,
			title: "Tudor Connect",
			screenshot: "/images/tudor.png",
			description: "Tudor Connect is a Rails application that improves upon of a certain Real Estate Company's Tenant Communication Database. Allowing users to reset their own passwords and alerting tenants whenever new memos are issued.",
			technologies: ["Ruby", "Rails", "Javascript","JQuery", "Backbone.js"],
			links: {
				"Github": "https://github.com/CarsonBills/tudor_connect",
				"Launch App": "http://tudorconnect.herokuapp.com/" 
			}
		},
		{
			id: 7,
			title: "Good Morning Carson",
			description: "Good Morning Carson is an Express application that gathers info for my morning routine.",
			screenshot: "/images/gmc.png",
			technologies: ["Javascript", "Node.js", "Express.js", "JQuery", "Angular.js", "React.js", "Adobe Illustrator"],
			links: {
				"Github": "https://github.com/CarsonBills/GoodMorningCarson",
				"Launch App": "#" 
			}
		},
		{
			id: 8,
			title: "CarsonBills.com",
			description: "Built in Express and Angular, to showcase web development experience.",
			screenshot: "/images/carsonbills.png",
			technologies: ["Javascript", "Node.js", "Express.js", "JQuery", "Angular.js"],
			links: {
				"Github": "https://github.com/CarsonBills/personal_website",
				"Launch App": "http://carsonbills.com/" 
			}
		},
		{
			id: 9,
			title: "Bumbershoot Equipment",
			screenshot: "/images/bumbershoot.png",
			description: "Beta release coming soon!",
		}
	]
	res.send(projects[req.params.id])
})

app.get('/api/portfolio', function(req, res){
	var projects = [
		{
			id: 0,
			title: "BusyQuill",
			screenshot: "/images/busyquill.png",
		}, 
		{
			id: 1,
			title: "Seek",
			screenshot: "/images/seek.png",
		},
		{
			id: 2,
			title: "CB URLShort",
			screenshot: "/images/shortener.png",
		},
		{
			id: 3,
			title: "TacoShack",
			screenshot: "/images/tacoshack.png",
		},
		{
			id: 4,
			title: "Dante's Inferno",
			screenshot: "/images/inferno.png",
		},
		{
			id: 5,
			title: "Bloom",
			screenshot: "/images/bloom.png",
		},
		{
			id: 6,
			title: "Tudor Connect",
			screenshot: "/images/tudor.png",
		},
		{
			id: 7,
			title: "Good Morning Carson",
			screenshot: "/images/gmc.png",
		},
		{
			id: 8,
			title: "CarsonBills.com",
			screenshot: "/images/carsonbills.png"
		},
		{	
			id: 9,
			title: "Bumbershoot Equipment",
			screenshot: "/images/bumbershoot.png"
		}
	]
	res.send(projects)
})

app.get("*", function(req, res){
	res.sendFile(__dirname + "/index.html");
});

app.listen(8080);