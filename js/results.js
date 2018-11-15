$( document ).ready(function() {
    var url = new URL(window.location.href);
    var searchtext = url.searchParams.get("search");
    console.log(searchtext);

	searchtext = searchtext.toLowerCase();
	var gameMap = games;
    var catMap = categories;
    var aspMap = aspects;
	var gResults = [];
	var cResults = [];
	var aResults = [];
	var gcResults = [];
	var gaResults = [];
	
	for (var g in games)
	{
		if (games[g]['title'].toLowerCase().includes(searchtext) && searchtext != "")
        {
			//Add it to the results
			gResults.push(g);
			document.getElementById("game_result").innerHTML += "<div class='row'><li><h3><a href="+games[g]['link']+"><img class='logo' src="+games[g]['images'][0]+"></img>"+games[g]['title']+"</a></h3>";
			document.getElementById("game_result").innerHTML += "<div class='desc'>"+games[g]['description']+"</div><br>";
			document.getElementById("game_result").innerHTML += "<div class='tags'>";
			
			for (var cat in games[g]['categories'])
			{
				for (var c in categories)
				{
					if (!gcResults.includes(c))
					{
						if (c == games[g]['categories'][cat])
						{
							gcResults.push(c);
						}
					}
				}
			}
			for (var i = 0; i < games[g]['categories'].length; i ++)
			{
				if (gcResults.includes(games[g]['categories'][i]))
				{
					document.getElementById("game_result").innerHTML += "<a href="+categories[games[g]['categories'][i]]['link']+">("+games[g]['categories'][i]+")</a> ";
				}
				else
				{
					document.getElementById("game_result").innerHTML += "("+games[g]['categories'][i]+") ";
				}
			}
			
			for (var asp in games[g]['aspects'])
			{
				for (var a in aspects)
				{
					if (!gaResults.includes(a))
					{
						if (a == games[g]['aspects'][asp])
						{
							gaResults.push(a);
						}
					}
				}
			}
			for (var i = 0; i < games[g]['aspects'].length; i ++)
			{
				if (gaResults.includes(games[g]['aspects'][i]))
				{
					document.getElementById("game_result").innerHTML += "<a href="+aspects[games[g]['aspects'][i]]['link']+">["+games[g]['aspects'][i]+"]</a> ";
				}
				else
				{
					document.getElementById("game_result").innerHTML += "["+games[g]['aspects'][i]+"] ";
				}
			}
			var gcResults = [];
			var gaResults = [];
			document.getElementById("game_result").innerHTML += "</div></li><br><br></div>\n";
        }
	}
	
	for (var c in categories)
	{
		if (categories[c]['title'].toLowerCase().includes(searchtext) && searchtext != "")
		{
			//Add it to the results
			cResults.push(c);
			document.getElementById("cat_result").innerHTML += "<div class='row'><li><h3><a href="+categories[c]['link']+">"+categories[c]['title']+"</a></h3>";
			document.getElementById("cat_result").innerHTML += "<div class='desc'>"+categories[c]['description']+"</div>";
			document.getElementById("cat_result").innerHTML += "</li><br><br></div>\n";
		}
	}
	
	for (var a in aspects)
	{
		if (aspects[a]['title'].toLowerCase().includes(searchtext) && searchtext != "")
		{
			//Add it to the results
			aResults.push(a);
			document.getElementById("asp_result").innerHTML += "<div class='row'><li><h3><a href="+aspects[a]['link']+">"+aspects[a]['title']+"</a></h3>";
			document.getElementById("asp_result").innerHTML += "<div class='desc'>"+aspects[a]['description']+"</div>";
			document.getElementById("asp_result").innerHTML += "</li><br><br></div>\n";
		}
	}
	
	if (gResults.length == 0)
	{
		document.getElementById("game_result").innerHTML += "<h3>No games found</h3></div>\n";
	}
	
	if (cResults.length == 0)
	{
		document.getElementById("cat_result").innerHTML += "<h3>No categories found</h3>\n";
	}
	
	if (aResults.length == 0)
	{
		document.getElementById("asp_result").innerHTML += "<h3>No aspects found</h3>\n";
	}

});