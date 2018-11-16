$( document ).ready(function() {
    //Game mapping
    var gameMap = games;
        
    var aspectMap = aspects;
    //if not defined,set the preferences to null
    if (localStorage.getItem("preference_aspect") === null)
    {
        localStorage.setItem("preference_aspect",JSON.stringify({}));
    }
    var pref_aspect = JSON.parse(localStorage.getItem("preference_aspect"));
    
    
    
        
    var categoryMap = categories;

    //if not defined,set the preferences to null
    if (localStorage.getItem("preference_category") === null)
    {
        localStorage.setItem("preference_category",JSON.stringify({}));
    }
    var pref_category = JSON.parse(localStorage.getItem("preference_category"));
    
    
    var recommendations = [];
    var recommend_aspect = [];
    
    //Loop through all the aspects and select games based on them
    for (var key in pref_aspect)
    {
        if (pref_aspect[key] === "Liked")
        {
            for (var keyG in games)
            {
                //If game has the aspect and is not already recommended
                if (games[keyG]["aspects"].includes(key) && !recommendations.includes(keyG))
                {
                    //Add it to the recommendations
                    recommendations.push(keyG);
                    recommend_aspect.push(keyG);
                }
            }
        }
    }
    var recommend_category = [];
    
    //loop through categories and do the same
    for (var key in pref_category)
    {
        if (pref_category[key] === "Liked")
        {
            for (var keyG in games)
            {
                //If game has the aspect and is not already recommended
                if (games[keyG]["categories"].includes(key) && !recommendations.includes(keyG))
                {
                    //Add it to the recommendations
                    recommendations.push(keyG);
                    recommend_category.push(keyG);
                }
            }
        }
    }
    
    var source   = document.getElementById("recommendation_template").innerHTML;
    var template = Handlebars.compile(source);
    
    if (recommend_aspect.length == 0)
    {
      document.getElementById("recommend_aspect").innerHTML += "<p>Could not recommend any games based on your aspects, try and like/dislike more aspects</p>";
    }
    else
    {
      for (var x = 0; x < recommend_aspect.length; x ++)
      {

          
          var game = gameMap[recommend_aspect[x]];
          var gameLink = "<a href=" + game["link"] + ">" + game["title"] + "</a>";

          var aspectLinks = []
          for (var y = 0; y < game["aspects"].length; y ++)
          {
            if (game["aspects"][y] in aspectMap)
            {
              aspectLinks.push("<a href=" + aspectMap[game["aspects"][y]]["link"] + ">" + aspectMap[game["aspects"][y]]["title"] + "</a>");
            }
            else
            {
              aspectLinks.push( game["aspects"][y]);
            }
          }

          var categoryLinks = []
          for (var y = 0; y < game["categories"].length; y ++)
          {
            if (game["categories"][y] in categoryMap)
            {
              categoryLinks.push("<a href=" + categoryMap[game["categories"][y]]["link"] + ">" + categoryMap[game["categories"][y]]["title"] + "</a>");
            }
            else
            {
              categoryLinks.push( game["categories"][y]);
            }
          }


          var context = {title: gameLink, description: game["description"], aspects: aspectLinks, categories: categoryLinks};
          var html    = template(context);
          document.getElementById("recommend_aspect").innerHTML += html;
      }
    }
    
    console.log(recommend_category);
    console.log(categoryMap);
    
    if (recommend_category.length == 0)
    {
      document.getElementById("recommend_category").innerHTML += "<p>Could not recommend any games based on your categories, try and like/dislike more categories</p>";
    }
    else
    {
      for (var x = 0; x < recommend_category.length; x ++)
      {
          var game = gameMap[recommend_category[x]];
          var gameLink = "<a href=" + game["link"] + ">" + game["title"] + "</a>";



          var aspectLinks = []
          for (var y = 0; y < game["aspects"].length; y ++)
          {
            if (game["aspects"][y] in aspectMap)
            {
              aspectLinks.push("<a href=" + aspectMap[game["aspects"][y]]["link"] + ">" + aspectMap[game["aspects"][y]]["title"] + "</a>");
            }
            else
            {
              aspectLinks.push( game["aspects"][y]);
            }
          }

          var categoryLinks = []
          for (var y = 0; y < game["categories"].length; y ++)
          {
            if (game["categories"][y] in categoryMap)
            {
              categoryLinks.push("<a href=" + categoryMap[game["categories"][y]]["link"] + ">" + categoryMap[game["categories"][y]]["title"] + "</a>");
            }
            else
            {
              categoryLinks.push( game["categories"][y]);
            }
          }


          var context = {title: gameLink, description: game["description"], aspects: aspectLinks, categories: categoryLinks};
          var html    = template(context);
          document.getElementById("recommend_category").innerHTML += html;
      }
    }    
});
