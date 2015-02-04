console.log(":)")

function hideAbout(){
	$("h3.about").hide();
}

function showStack(){
	$("h2.stack").on("mouseover", function(){
		$("h3.contact").hide();
		$("h3.projects").hide();		
		$("h3.stack").fadeIn(300);
	});
}

function showContact(){
	$("h2.contact").on("mouseover", function(){
		$("h3.stack").hide();
		$("h3.projects").hide();
		$("h3.contact").fadeIn(300);
	});
}

function showProjects(){
	$("h2.projects").on("mouseover", function(){
		$("h3.stack").hide();
		$("h3.contact").hide();
		$("h3.projects").fadeIn(300);
	});
}

function navHover(){
	$(".underline").hover(function(){
		$(this).animate({ fontSize: "28px" });
}, function(){
	$(this).animate({ fontSize: "25px" });
	});
}







