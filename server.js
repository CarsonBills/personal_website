var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/api/projects', function(req, res){
	var projects = [{title: "BusyQuill"}, {title: "seek"}]
	res.send(projects)
})

app.get("*", function(req, res){
	res.sendFile(__dirname + "/index.html");
});

app.listen(8080);