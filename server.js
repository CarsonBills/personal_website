var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/api/projects', function(req, res){
	var projects = [
		{
			title: "BusyQuill",
			screenshot: "/images/busyquill.png",
			description: "BusyQuill is a game written in Sinatra that uses Backbone.js to display generated passages that maintain the tone of one of several authors."
		}, 
		{
			title: "Seek",
			screenshot: "/images/seek.png",
			description: "Seek is a Rails Application that gathers data about a city and returns it so that user gets a snapshot idea of a possible travel destination."
		},
		{
			title: "CB URLShort",
			screenshot: "/images/shortener.png",
			description: "CB URL Shortener is a Rails application built to reduce the length of a URL to a manageable size."
		},
		{
			title: "TacoShack",
			description: "Tacoshack is a Rails application that generates silly menu items."
		},
		{
			title: "Dante's Inferno",
			screenshot: "/images/inferno.png",
			description: "The Inferno is an animated application of the first Canto of Dante's Inferno written using JQuery."
		},
		{
			title: "Bloom",
			screenshot: "/images/bloom.png",
			description: "Bloom is a customized WordPress site built to showcase the work of a brooklyn based furniture design collective."
		},
		{
			title: "Tudor Connect",
			screenshot: "/images/tudor.png",
			description: "Tudor Connect is a Rails application that improves upon of a certain Real Estate Company's Tenant Communication Database. Allowing users to reset their own passwords and alerting tenants whenever new memos are issued."
		},
		{
			title: "Good Morning Carson",
			description: "Good Morning Carson is an Express application that gathers info for my morning routine."
		},
		{
			title: "CarsonBills.com",
			description: "Built in Express and Angular, to showcase my web development experience."
		}
	]
	res.send(projects)
})

app.get("*", function(req, res){
	res.sendFile(__dirname + "/index.html");
});

app.listen(8080);