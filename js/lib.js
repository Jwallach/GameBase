//MAKE SURE THE BUTTON THAT NEEDS TO BE BEDITED HAS THE ID wishlist_game_ + game_key
//RETURNS TRUE IF ADDED TI WISHLITS, FALSE IF REMOVED
function modify_wishlist(game_key)
{
    //if not defined,set wishlist to null 
    if (localStorage.getItem("wishlist") === null)
    {
        localStorage.setItem("wishlist",JSON.stringify([]));
    }
    
    //get wishlist
    var wishlist = JSON.parse(localStorage.getItem("wishlist"));
    
    var alreadyInWishlist = false;
    for (var x = 0; x < wishlist.length; x ++)
    {
        if (wishlist[x] === game_key)
        {
            alreadyInWishlist = true;
            document.getElementById("wishlist_game_" + game_key).innerHTML = "Game removed from Wish List";
            wishlist.splice(x,1);
            localStorage.setItem("wishlist",JSON.stringify(wishlist));
            return true;
        }
    }
    
    if (!alreadyInWishlist)
    {
        //put in the list
        wishlist.push(game_key);
        document.getElementById("wishlist_game_" + game_key).innerHTML = "Game added to Wish List";
        localStorage.setItem("wishlist",JSON.stringify(wishlist));
        return false;
    }
    
    
    
    
    
    
}
