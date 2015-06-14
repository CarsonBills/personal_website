console.log(":)")

function showBio(){
	$("ul.bio").on("click", function(){
		$("div.stack").hide();
		$("div.contact").hide();
		$("div.about").hide();
		$("div.projects").hide();
		$("div.bio").fadeIn(300);
	});
}

function showStack(){
	$("ul.stack").on("click", function(){
		$("div.contact").hide();
		$("div.projects").hide();	
		$("div.about").hide();	
		$("div.bio").hide();
		$("div.stack").fadeIn(300);
	});
}

function showContact(){
	$("ul.contact").on("click", function(){
		$("div.stack").hide();
		$("div.projects").hide();
		$("div.about").hide();
		$("div.bio").hide();
		$("div.contact").fadeIn(300);
	});
}

function showProjects(){
	$("ul.projects").on("click", function(){
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










