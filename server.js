var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

app.get("/api/projects/:id", function(req, res){
	var projects = [
		{
			id: 0,
			title: "BusyQuill",
			description: "BusyQuill is a game written in Sinatra that uses Backbone.js to display generated passages that maintain the tone of one of several authors."
		},
		{
			id: 1,
			title: "Seek",
			description: "Seek is a Rails Application that gathers data about a city and returns it so that user gets a snapshot idea of a possible travel destination."
		},
		{
			id: 2,
			title: "CB URLShort",
			description: "CB URL Shortener is a Rails application built to reduce the length of a URL to a manageable size."
		},
		{
			id: 3,
			title: "TacoShack",
			description: "Tacoshack is a Rails application that generates silly menu items."
		},
		{
			id: 4,
			title: "Dante's Inferno",
			screenshot: "/images/inferno.png",
			description: "The Inferno is an animated application of the first Canto of Dante's Inferno written using JQuery."
		},
		{
			id: 5,
			title: "Bloom",
			screenshot: "/images/bloom.png",
			description: "Bloom is a customized WordPress site built to showcase the work of a brooklyn based furniture design collective."
		},
		{
			id: 6,
			title: "Tudor Connect",
			screenshot: "/images/tudor.png",
			description: "Tudor Connect is a Rails application that improves upon of a certain Real Estate Company's Tenant Communication Database. Allowing users to reset their own passwords and alerting tenants whenever new memos are issued."
		},
		{
			id: 7,
			title: "Good Morning Carson",
			description: "Good Morning Carson is an Express application that gathers info for my morning routine."
		},
		{
			id: 8,
			title: "CarsonBills.com",
			description: "Built in Express and Angular, to showcase my web development experience."
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