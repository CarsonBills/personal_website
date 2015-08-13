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
				"Launch": "http://busyquill.herokuapp.com/" 
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
				"Launch": "http://sightseek.herokuapp.com/" 
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
				"Launch": "http://cmbills.herokuapp.com/" 
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
				"Launch": "https://github.com/CarsonBills/tacoshack" 
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
				"Launch": "http://carsonbills.github.io/Dantes_Inferno/" 
			}
		},
		{
			id: 5,
			title: "Bloom",
			screenshot: "/images/bloom.png",
			description: "Bloom is a customized WordPress site built to showcase the work of a brooklyn based furniture design collective.",
			technologies: ["WordPress", "CSS"],
			links: {
				"Launch": "http://104.131.196.163/" 
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
				"Launch": "http://tudorconnect.herokuapp.com/" 
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
				"Launch": "http://goodmorningcarson.herokuapp.com/" 
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
				"Launch": "http://carsonbills.com/" 
			}
		},
		{
			id: 9,
			title: "Bumbershoot Equipment",
			screenshot: "/images/bumbershoot.png",
			description: "Rails App for short term camping equipment rentals. Beta release coming soon!",
			technologies: ["Ruby", "Rails", "Javascript", "Angular.js", "Bootstrap", "Sass"],
			links: {
				"Launch": "https://github.com/BumbershootEquipment/Bumbershoot",
			}
		}
	]
	res.send(projects[req.params.id])
})

app.get('/api/portfolio', function(req, res){
	var projects = [
		{
			id: 7,
			title: "Good Morning Carson",
			screenshot: "/images/thumbs/gmc_thumb.png",
		},
		{	
			id: 9,
			title: "Bumbershoot Equip.",
			screenshot: "/images/thumbs/bumbershoot_thumb.png"
		},
		{
			id: 1,
			title: "Seek",
			screenshot: "/images/thumbs/seek_thumb.png",
		},
		{
			id: 0,
			title: "BusyQuill",
			screenshot: "/images/thumbs/busyquill_thumb.png",
		}, 
		{
			id: 5,
			title: "Bloom",
			screenshot: "/images/thumbs/bloom_thumb.png",
		},
		{
			id: 3,
			title: "TacoShack",
			screenshot: "/images/thumbs/tacoshack_thumb.png",
		},
		{
			id: 2,
			title: "CB URLShort",
			screenshot: "/images/thumbs/shortener_thumb.png",
		},
		{
			id: 4,
			title: "Dante's Inferno",
			screenshot: "/images/thumbs/inferno_thumb.png",
		},
		{
			id: 6,
			title: "Tudor Connect",
			screenshot: "/images/thumbs/tudor_thumb.png",
		},
		{
			id: 8,
			title: "CarsonBills.com",
			screenshot: "/images/thumbs/carsonbills_thumb.png"
		},
	]
	res.send(projects)
})

app.get("*", function(req, res){
	res.sendFile(__dirname + "/index.html");
});

app.listen(8080);