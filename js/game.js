$( document ).ready(function() {
    var gameMap = games;
    var categoryMap = categories;
    var aspectMap = aspects;
    
    //Populate fields with json information
    var game = gameMap[document.getElementById("game_key").innerHTML];
    
    document.getElementById("game_title").innerHTML = game["title"];
    document.getElementById("description").innerHTML += game["description"];
    
    var aspectList = game["aspects"];
    for (var x = 0; x < aspectList.length; x ++)
    {
        if (aspectList[x] in aspectMap)
        {
            document.getElementById("aspects").innerHTML += "<li><a href=" + aspectMap[aspectList[x]]["link"] + ">" + aspectMap[aspectList[x]]["title"] + "</a></li>";
        }
        else
        {
            document.getElementById("aspects").innerHTML += "<li>" + aspectList[x] + "</li>";
        }
    }
    
    var categoryList = game["categories"];
    for (var x = 0; x < categoryList.length; x ++)
    {
        if (categoryList[x] in categoryMap)
        {
            document.getElementById("categories").innerHTML += "<li><a href=" + categoryMap[categoryList[x]]["link"] + ">" + categoryMap[categoryList[x]]["title"] + "</a></li>";
        }
        else
        {
            document.getElementById("categories").innerHTML += "<li>" + categoryList[x] + "</li>";
        }
    }
    
    var similar = game["similar_games"];
    for (var x = 0; x < similar.length; x ++)
    {
        if (similar[x] in gameMap)
        {
            document.getElementById("similar_games").innerHTML += "<li><a href=" + gameMap[similar[x]]["link"] + ">" + gameMap[similar[x]]["title"] + "</a></li>";
        }
        else
        {
            document.getElementById("similar_games").innerHTML += "<li>" + similar[x] + "</li>";
        }
    }
    
    
    var images = game["images"];
    for (var x = 0; x < images.length; x ++)
    {
        document.getElementById("images").innerHTML += "<div class=\"column\"><a target=\"_blank\" href\"" + images[x] + "\"><img class=\"images\" src=\"" + images[x] + "\"></a></div>";
    }
        
    
    
    
    //If game already wish listed, set the text of the wish list to 
    //if not defined,set wishlist to null 
    if (localStorage.getItem("wishlist") === null)
    {
        localStorage.setItem("wishlist",JSON.stringify([]));
    }
    var title = document.getElementById("game_key").innerHTML;
    //get wishlist
    var wishlist = JSON.parse(localStorage.getItem("wishlist"));
    
    var alreadyInWishlist = false;
    for (var x = 0; x < wishlist.length; x ++)
    {
        if (wishlist[x] === title)
        {
            alreadyInWishlist = true;
            break;
        }
    }
    
    if (alreadyInWishlist)
    {
        document.getElementById("wishlist_game").innerHTML = "Game in Wish List";
    }

});



$('#wishlist_game').click(function(){
    //if not defined,set wishlist to null 
    if (localStorage.getItem("wishlist") === null)
    {
        localStorage.setItem("wishlist",JSON.stringify([]));
    }
    
    var title = document.getElementById("game_key").innerHTML;
    
    //get wishlist
    var wishlist = JSON.parse(localStorage.getItem("wishlist"));
    
    var alreadyInWishlist = false;
    for (var x = 0; x < wishlist.length; x ++)
    {
        if (wishlist[x] === title)
        {
            alreadyInWishlist = true;
            document.getElementById("wishlist_game").innerHTML = "Game removed from Wish List";
            wishlist.splice(x,1);
            localStorage.setItem("wishlist",JSON.stringify(wishlist));
            break;
        }
    }
    
    if (!alreadyInWishlist)
    {
        //put in the list
        wishlist.push(title);
        document.getElementById("wishlist_game").innerHTML = "Game added to Wish List";
        localStorage.setItem("wishlist",JSON.stringify(wishlist));
    }
    
    
    
    
    
    
});
