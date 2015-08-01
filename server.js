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
		},
		{
			id: 1,
			title: "Seek",
			screenshot: "/images/seek.png",
			description: "Seek is a Rails Application that gathers data about a city and returns it so that user gets a snapshot idea of a possible travel destination.",
			technologies: ["Ruby", "Rails", "Javascript","JQuery"]
		},
		{
			id: 2,
			title: "CB URLShort",
			screenshot: "/images/shortener.png",
			description: "CB URL Shortener is a Rails application built to reduce the length of a URL to a manageable size.",
			technologies: ["Ruby", "Rails", "Javascript","JQuery"]
		},
		{
			id: 3,
			title: "TacoShack",
			screenshot: "/images/tacoshack.png",
			description: "Tacoshack is a Rails application that generates silly menu items.",
			technologies: ["Ruby", "Rails", "Javascript","JQuery", "Handlebars"]
		},
		{
			id: 4,
			title: "Dante's Inferno",
			screenshot: "/images/inferno.png",
			description: "The Inferno is an animated application of the first Canto of Dante's Inferno written using JQuery.",
			technologies: ["HTML", "CSS", "Javascript","JQuery"]
		},
		{
			id: 5,
			title: "Bloom",
			screenshot: "/images/bloom.png",
			description: "Bloom is a customized WordPress site built to showcase the work of a brooklyn based furniture design collective.",
			technologies: ["WordPress", "CSS"]
		},
		{
			id: 6,
			title: "Tudor Connect",
			screenshot: "/images/tudor.png",
			description: "Tudor Connect is a Rails application that improves upon of a certain Real Estate Company's Tenant Communication Database. Allowing users to reset their own passwords and alerting tenants whenever new memos are issued.",
			technologies: ["Ruby", "Rails", "Javascript","JQuery", "Backbone.js"]
		},
		{
			id: 7,
			title: "Good Morning Carson",
			description: "Good Morning Carson is an Express application that gathers info for my morning routine.",
			technologies: ["Javascript", "Node.js", "Express.js", "JQuery", "Angular.js", "React.js", "Adobe Illustrator"],
		},
		{
			id: 8,
			title: "CarsonBills.com",
			description: "Built in Express and Angular, to showcase web development experience.",
			technologies: ["Javascript", "Node.js", "Express.js", "JQuery", "Angular.js"]
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
		},
		{
			id: 8,
			title: "CarsonBills.com",
		}
	]
	res.send(projects)
})

app.get("*", function(req, res){
	res.sendFile(__dirname + "/index.html");
});

app.listen(8080);