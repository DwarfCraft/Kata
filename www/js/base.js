/**
 * 
 */
/**
 * 
 */
/* JSON Example 
$(document).ready(function(){
    $("#getOpsview").click(function(){
		 console.log("click Opsview");
        $.getJSON("https://a70lqcomopvw002.bcbssc.com/rest", function(result){
            $.each(result, function(key, value){ 
				   var markup = "<tr><td>" + key + "</td><td>" + value + "</td></tr>";
				   $("table tbody").append(markup);
				});
        });
    });
});
*/

var testJSON = '{"open": "8:00","close": "5:00","days": "Monday - Thursday"}';
//Call to function with anonymous callback
loadJSON(function(response) {
	// Do Something with the response e.g.
	jsonresponse = JSON.parse(response);
	var hourOpen = jsonresponse.days + ": " + jsonresponse.open + " - " + jsonresponse.close;
	document.getElementById("hoursText").innerHTML = "<h3>" + hourOpen + "</h3>";

});

function loadJSON(callback) {
	callback(testJSON);
/*
	var xobj = new XMLHttpRequest();
	xobj.overrideMimeType("application/json");
	xobj.open('GET', 'data.json', true);
	xobj.onreadystatechange = function () {
	if (xobj.readyState == 4 && xobj.status == "200") {
			// .open will NOT return a value but simply returns undefined in async mode so use a callback
			callback(xobj.responseText);
		}
	}
	xobj.send(null);
*/
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

//Listeners
var closeIcons = document.getElementsByClassName("closebtn");
for (i = 0; i < closeIcons.length; i++) {
	console.log(closeIcons[i]);
	if (closeIcons[i].parentElement.id == "alert") {
		closeIcons[i].addEventListener("click", function() {document.getElementById("alert").style.display='none';});
	}
	if (closeIcons[i].parentElement.id == "hours") {
		closeIcons[i].addEventListener("click", function() {document.getElementById("hours").style.display="none";});
	}
	if (closeIcons[i].parentElement.id == "other") {
		closeIcons[i].addEventListener("click", function() {document.getElementById("other").style.display="none";});
	}	
	if (closeIcons[i].parentElement.id == "contact") {
		closeIcons[i].addEventListener("click", function() {document.getElementById("contact").style.display="none";});
	}
}

var menuOptions = document.getElementsByClassName("menu");
for (i = 0; i < menuOptions.length; i++) {
	if (menuOptions[i].id == "menuHours") {
		menuOptions[i].addEventListener("click", function() {document.getElementById("hours").style.display='block';});
	}
	if (menuOptions[i].id == "menuContact") {
		menuOptions[i].addEventListener("click", function() {document.getElementById("contact").style.display='block';});
	}
	if (menuOptions[i].id == "menuOther") {
		menuOptions[i].addEventListener("click", function() {document.getElementById("other").style.display='block';});
	}
	if (menuOptions[i].id == "menuHome") {
		menuOptions[i].addEventListener("click", function() {	
			var menuContent = document.getElementsByClassName("options");
			for (var i = 0; i < menuContent.length; i++) {
				menuContent[i].style.display = "none";
			}
		});
	}	
	//menuOptions[i].addEventListener("click", menuHandler(menuOptions[i].id));
}

/*
	var menuContent = document.getElementsByClassName("options");
	for (var i = 0; i < menuContent.length; i++) {
		menuContent[i].style.display = "none";
	}
	if (itemClicked != 'menuHome') {
		document.getElementById(itemClicked).style.display='block';
	}
	
*/

document.getElementById("menuButton").addEventListener("click", openNav);
document.getElementById("menuClose").addEventListener("click", closeNav);


