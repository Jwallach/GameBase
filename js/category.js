$( document ).ready(function() {
    var gameMap = games;
    var categoryMap = categories;
    

    //Populate fields with json information
    var category = categoryMap[document.getElementById("category_title").innerHTML];
    
    document.getElementById("category_title").innerHTML = category["title"];
    document.getElementById("category_description").innerHTML += category["description"];

    
    var examples = category["game_examples"];
    for (var x = 0; x < examples.length; x ++)
    {
        if (examples[x] in gameMap)
        {
            document.getElementById("game_examples").innerHTML += "<li><a href=" + gameMap[examples[x]]["link"] + ">" + gameMap[examples[x]]["title"] + "</a></li>";
        }
        else
        {
            document.getElementById("game_examples").innerHTML += "<li>" + examples[x] + "</li>";
        }
    }


});
