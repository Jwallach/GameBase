$( document ).ready(function() {
    //category mapping
    var categoryMap = categories;
    
    for (key in categoryMap)
    {
        document.getElementById("category_list").innerHTML += "<li><a href=" + categoryMap[key]["link"] + ">" + categoryMap[key]["title"] + "</a></li>";
    }
});
