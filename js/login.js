
	

function check() {	
    var username = document.getElementById('username');
	if (username.value == "")
	{
		alert('Invalid username');
	}
	else
	{
		localStorage.setItem('username', username.value);
		window.location.href = "profile.html";
	}
}
