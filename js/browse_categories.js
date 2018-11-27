$( document ).ready(function() {
    //category mapping
    var categoryMap = categories;
    
    for (key in categoryMap)
    {
		document.getElementById("category_list").innerHTML += "<button class='collapsible'>"+categoryMap[key]["title"]+"</button>";
		document.getElementById("category_list").innerHTML += "<div class='content'><p class='description'>"+categoryMap[key]["description"]+"<br><a href=" + categoryMap[key]["link"] + ">Learn More</a></p>";
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
