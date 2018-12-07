$( document ).ready(function() {
    //Aspect mapping
    var aspectMap = aspects;
    
    for (key in aspectMap)
    {
		document.getElementById("aspect_list").innerHTML += "<button class='collapsible'>"+aspectMap[key]["title"]+"</button>";
		document.getElementById("aspect_list").innerHTML += "<div class='content'><p class='description'>"+aspectMap[key]["description"]+"<br><a href=" + aspectMap[key]["link"] + ">Learn More</a></p></div>";
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
