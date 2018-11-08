$( document ).ready(function() {
    //Game mapping
    var gameMap = games;
    
    
    //if not defined,set wishlist to null 
    if (localStorage.getItem("wishlist") === null)
    {
        localStorage.setItem("wishlist",JSON.stringify([]));
    }
    var wishlist = JSON.parse(localStorage.getItem("wishlist"));
    if (wishlist.length == 0)
    {
        document.getElementById("wishlist_games").innerHTML += "<h5>Your wish list is empty, go to a game's page to add it!<h5>\n";
    }
    else
    {
        
      for (var x = 0; x < wishlist.length; x ++)
      {
        document.getElementById("wishlist_games").innerHTML += "<h5><a href=" + gameMap[wishlist[x]] + ">" + wishlist[x] + "</a></h5>\n"; 
      }
    }
    
    
    var aspectMap = aspects;
    //if not defined,set the preferences to null
    if (localStorage.getItem("preference_aspect") === null)
    {
        localStorage.setItem("preference_aspect",JSON.stringify({}));
    }
    var pref_aspect = JSON.parse(localStorage.getItem("preference_aspect"));
    if (Object.keys(pref_aspect).length == 0)
    {
        document.getElementById("aspect_preferences").innerHTML += "<h5><a href=\"preferences.html\">" + "You have no aspect preferences, go to Preferences to add some" +"</a></h5>\n";
    }
    else
    {
      for (var key in pref_aspect) 
      {
        var like = "";
        if (pref_aspect[key] === "Liked")
        {
          like = "Liked";
        }
        else
        {
          like = "Disliked";
        }
        document.getElementById("aspect_preferences").innerHTML += "<h5><a href=" + aspectMap[key] + ">" + key + "</a> | " + like + "</h5>\n"; 
      }
    }
    
    
    var categoryMap = categories;
    console.log(categories);
    //if not defined,set the preferences to null
    if (localStorage.getItem("preference_category") === null)
    {
        localStorage.setItem("preference_category",JSON.stringify({}));
    }
    var pref = JSON.parse(localStorage.getItem("preference_category"));
    if (Object.keys(pref).length == 0)
    {
        document.getElementById("category_preferences").innerHTML += "<h5><a href=\"preferences.html\">" + "You have no category preferences, go to Preferences to add some" +"</a></h5>\n";
    }
    else
    {
      for (var key in pref) 
      {
        var like = "";
        if (pref[key] === "Liked")
        {
          like = "Liked";
        }
        else
        {
          like = "Disliked";
        }
        document.getElementById("category_preferences").innerHTML += "<h5><a href=" + categoryMap[key] + ">" + key + "</a> | " + like + "</h5>\n"; 
      }
    }
    if (localStorage.getItem("username") === null)
	{
		document.getElementById("username").innerHTML += "<h1>Username</h1>";
	}
	else
	{
		document.getElementById("username").innerHTML += "<h1>"+localStorage.getItem("username")+"</h1>";
	}
});
