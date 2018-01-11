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
var contactJSON = '{"name": "Adam Holmes","phone": "123-123-1234","email": "adam@adam.com"}';
var aboutJSON = '{"info": "This is karate at its finest!"}';
var newStudentJSON = '{"info": "New Students get two free lessons."}';
var glossaryJSON = '{"info": "first kata"}';
var formsJSON = '{"info": "forms to use"}';

//Call to function with anonymous callback
loadJSON(function(response) {
	// Do Something with the response e.g.
	jsonresponse = JSON.parse(response);
	var hourOpen = jsonresponse.days + ": " + jsonresponse.open + " - " + jsonresponse.close;
	document.getElementById("hoursText").innerHTML = "<h3>" + hourOpen + "</h3>";

	var contactResponse = JSON.parse(contactJSON);
	var contactInfo = contactResponse.name + "<br>" + contactResponse.phone + "<br>" + contactResponse.email;
	document.getElementById("contactText").innerHTML = "<h3>" + contactInfo + "</h3>";

	var aboutResponse = JSON.parse(aboutJSON);
	var aboutInfo = aboutResponse.info + "<br>";
	document.getElementById("aboutText").innerHTML = "<h3>" + aboutInfo + "</h3>";

	var newStudentResponse = JSON.parse(newStudentJSON);
	var newStudentInfo = aboutResponse.info + "<br>";
	document.getElementById("newStudentText").innerHTML = "<h3>" + newStudentInfo + "</h3>";

	var glossaryResponse = JSON.parse(glossaryJSON);
	var glossaryInfo = glossaryResponse.info + "<br>";
	document.getElementById("glossaryText").innerHTML = "<h3>" + glossaryInfo + "</h3>";

	var formsResponse = JSON.parse(formsJSON);
	var formsInfo = formsResponse.info + "<br>";
	document.getElementById("formsText").innerHTML = "<h3>" + formsInfo + "</h3>";
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
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("mySidenav").style.display = "block";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0%";
    document.getElementById("mySidenav").style.display = "none";
}

//Listeners
var closeIcons = document.getElementsByClassName("closebtn");
for (i = 0; i < closeIcons.length; i++) {
	//console.log(closeIcons[i]);
	if (closeIcons[i].parentElement.id == "alert") {
		closeIcons[i].addEventListener("click", function() {document.getElementById("alert").style.display='none';});
	}
}

var menuOptions = document.getElementsByClassName("menu");
for (i = 0; i < menuOptions.length; i++) {
	if (menuOptions[i].id == "menuHours") {
		menuOptions[i].addEventListener("click", function() {closePage();document.getElementById("hours").style.display='block';closeNav();});
	}
	if (menuOptions[i].id == "menuContact") {
		menuOptions[i].addEventListener("click", function() {closePage();document.getElementById("contact").style.display='block';closeNav();});
	}
	if (menuOptions[i].id == "menuAbout") {
		menuOptions[i].addEventListener("click", function() {closePage();document.getElementById("about").style.display='block';closeNav();});
	}
	if (menuOptions[i].id == "menuNewStudent") {
		menuOptions[i].addEventListener("click", function() {closePage();document.getElementById("newStudent").style.display='block';closeNav();});
	}
	if (menuOptions[i].id == "menuGlossary") {
		menuOptions[i].addEventListener("click", function() {closePage();document.getElementById("glossary").style.display='block';closeNav();});
	}
	if (menuOptions[i].id == "menuForms") {
		menuOptions[i].addEventListener("click", function() {closePage();document.getElementById("forms").style.display='block';closeNav();});
	}
	if (menuOptions[i].id == "menuHome") {
		menuOptions[i].addEventListener("click", function() {	
			var menuContent = document.getElementsByClassName("options");
			for (var i = 0; i < menuContent.length; i++) {
				menuContent[i].style.display = "none";
			}
			document.getElementById("infoBlock").style.display = "block";
			closeNav();
		});
	}	
	//menuOptions[i].addEventListener("click", menuHandler(menuOptions[i].id));
}

function closePage() {
	var menuContent = document.getElementsByClassName("page");
	for (var i = 0; i < menuContent.length; i++) {
		menuContent[i].style.display = "none";
	}
	document.getElementById("infoBlock").style.display = "none";
	
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


