$(document).ready(function() {
    //category mapping
    var categoryMap = categories;
    
    var source   = document.getElementById("selection_template").innerHTML;
    var template = Handlebars.compile(source);
    
    for (var key in categoryMap) 
    {
        var id = key.replace(/\s/g,'');
        var context = {title: key, name:id, link: categoryMap[key], id_like: id + "_like", id_neutral : id + "_neutral", id_dislike: id + "_dislike"};
        var html    = template(context);
        document.getElementById("categories").innerHTML += html;
    }
    
    //if not defined,set the preferences to null
    if (localStorage.getItem("preference_category") === null)
    {
        localStorage.setItem("preference_category",JSON.stringify({}));
    }
    
    var pref_category = JSON.parse(localStorage.getItem("preference_category"));
    for (var key in pref_category)
    {         
         var value = pref_category[key];
         var id = key.replace(/\s/g,'');
         if (value === "Liked")
         {
             document.getElementById(key + "_like").checked = true;
         }
         else if (value === "Disliked")
         {
            document.getElementById(key + "_dislike").checked = true;
         }
    }
    
    
    //aspect mapping
    var aspectMap = aspects;
    
    for (var key in aspectMap) 
    {
        var id = key.replace(/\s/g,'');
        var context = {title: key, name: id, link: aspectMap[key], id_like: id + "_like", id_neutral : id + "_neutral", id_dislike: id + "_dislike"};
        var html    = template(context);

        document.getElementById("aspects").innerHTML += html;
    }
    
    //if not defined,set the preferences to null
    if (localStorage.getItem("preference_aspect") === null)
    {
        localStorage.setItem("preference_aspect",JSON.stringify({}));
    }
    
    var pref_aspect = JSON.parse(localStorage.getItem("preference_aspect"));
    for (var key in pref_aspect)
    {         
         var value = pref_aspect[key];
         var id = key.replace(/\s/g,'');
         if (value === "Liked")
         {
             document.getElementById(id + "_like").checked = true;
         }
         else if (value === "Disliked")
         {
            document.getElementById(id + "_dislike").checked = true;
         }
    }
    
    
});



$('#save_preferences').click(function(){
    var categoryMap = categories;
    var aspectMap = aspects;
    
    //if not defined,set the preferences to null
    if (localStorage.getItem("preference_category") === null)
    {
        localStorage.setItem("preference_category",JSON.stringify({}));
    }
    var pref_category = JSON.parse(localStorage.getItem("preference_category"));
    
    for (var key in categoryMap) 
    {
         var value = $("input[name=" + key.replace(/\s/g,'') + "]:checked").val();
         if (value === "Liked")
         {
             pref_category[key] = "Liked";
         }
         else if (value === "Disliked")
         {
             pref_category[key] = "Disliked";
         }
         else
         {
             delete pref_category[key];
         }
    }
    
    localStorage.setItem("preference_category",JSON.stringify(pref_category));
    
    
    //if not defined,set the preferences to null
    if (localStorage.getItem("preference_aspect") === null)
    {
        localStorage.setItem("preference_aspect",JSON.stringify({}));
    }
    var pref_aspect = JSON.parse(localStorage.getItem("preference_aspect"));
    
    for (var key in aspectMap) 
    {
         var value = $("input[name=" + key.replace(/\s/g,'') + "]:checked").val();
         if (value === "Liked")
         {
             pref_aspect[key] = "Liked";
         }
         else if (value === "Disliked")
         {
             pref_aspect[key] = "Disliked";
         }
         else
         {
             delete pref_aspect[key];
         }
    }
    
    
      localStorage.setItem("preference_aspect",JSON.stringify(pref_aspect));
	  
	  document.getElementById("saved").innerHTML = "Preferences Saved. <h5><a href=\"recommend.html\"</a>Click here to see recommendations!</h5>\n";
   
});
