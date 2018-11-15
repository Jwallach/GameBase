$( document ).ready(function() {
    //Aspect mapping
    var aspectMap = aspects;
    
    for (key in aspectMap)
    {
        document.getElementById("aspect_list").innerHTML += "<li><a href=" + aspectMap[key]["link"] + ">" + aspectMap[key]["title"] + "</a></li>";
    }
});
