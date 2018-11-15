$( document ).ready(function() {
    //game mapping
    var gameMap = games;
    
    for (key in gameMap)
    {
        document.getElementById("game_list").innerHTML += "<li><a href=" + gameMap[key]["link"] + ">" + gameMap[key]["title"] + "</a></li>";
    }
});
