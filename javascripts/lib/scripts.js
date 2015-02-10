console.log(":)")

function showBio(){
	$("h2.bio").on("mouseover", function(){
		$("div.stack").hide();
		$("div.contact").hide();
		$("div.about").hide();
		$("div.projects").hide();
		$("div.bio").fadeIn(300);
	});
}

function showStack(){
	$("h2.stack").on("mouseover", function(){
		$("div.contact").hide();
		$("div.projects").hide();	
		$("div.about").hide();	
		$("div.bio").hide();
		$("div.stack").fadeIn(300);
	});
}

function showContact(){
	$("h2.contact").on("mouseover", function(){
		$("div.stack").hide();
		$("div.projects").hide();
		$("div.about").hide();
		$("div.bio").hide();
		$("div.contact").fadeIn(300);
	});
}

function showProjects(){
	$("h2.projects").on("mouseover", function(){
		$("div.stack").hide();
		$("div.contact").hide();
		$("div.bio").hide();
		$("div.about").hide();
		$("div.projects").fadeIn(300);
	});
}


function showLanding(){
	$("h1.name").on("click", function(){
		$("div.stack").hide();
		$("div.contact").hide();
		$("div.projects").hide();
		$("div.bio").hide();
		$("div.about").fadeIn(300);
	});
}

function navHover(){
	$("span.nav").hover(function(){
		$(this).animate({ fontSize: "28px" });
}, function(){
	$(this).animate({ fontSize: "25px" });
	});
}









