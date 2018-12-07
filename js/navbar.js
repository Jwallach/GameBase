$( document ).ready(function() {

	if (localStorage.getItem("username") === null)
	{
		document.getElementById("profile").innerHTML = "<a class='nav-link' href='login.html'>Login</a>";
	}
	else
	{
		document.getElementById("profile").innerHTML = "<a class='nav-link' href='profile.html'>Profile</a>";
    document.getElementById("nav-list").innerHTML += "<a class='nav-link' id='logout' href='login.html' onclick='logout()'>Logout</a>";
	}
});

function logout()
{
	localStorage.clear();
	//localStorage.removeItem("username");
}
