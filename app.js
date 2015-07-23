var express = require('express');
var app = express();
var expressLayouts = require('express-ejs-layouts');

app.use(express.static(__dirname + '/public'));

app.set("view engine", "ejs");
app.set("layout", "layout.ejs")

app.use(expressLayouts);

app.get('/', function(req, res){
  res.render('index', { layout: 'layout.ejs', heading: "Carson M Bills" })
})

app.get("/projects", function(req, res){
	res.send({test: "Boop", heading: "Projects"})
})



app.listen(8080);