$( document ).ready(function() {
    var gameMap = games;
    var aspectMap = aspects;
    
    //Populate fields with json information
    var aspect = aspectMap[document.getElementById("aspect_title").innerHTML];
    
    document.getElementById("aspect_title").innerHTML = aspect["title"];
    document.getElementById("aspect_description").innerHTML += aspect["description"];

    
    var examples = aspect["game_examples"];
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
