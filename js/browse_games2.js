$( document ).ready(function() {
    //game mapping
    var gameMap = games;
    
    for (key in gameMap)
    {
		document.getElementById("game_list").innerHTML += "<button class='collapsible'>"+gameMap[key]["title"]+"</button>";
		document.getElementById("game_list").innerHTML += "<div class='content'><p class='description'>"+gameMap[key]["description"]+"<br><a href=" + gameMap[key]["link"] + ">Learn More</a></p></div>";
	}
	
	var coll = document.getElementsByClassName("collapsible");
	var i;

	for (i = 0; i < coll.length; i++) {
		coll[i].addEventListener("click", function() {
			this.classList.toggle("active");
			var content = this.nextElementSibling;
			if (content.style.display === "block") {
			  content.style.display = "none";
			} else {
			  content.style.display = "block";
			}
		});
        
    }
	});