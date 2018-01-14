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
/*
 * Programs & Class Schedule
Lil Dragons Ages 6-7yrs.

Beginner Kids Ages 8-13.

Intermediate Kids Ages 8-13

Advanced Kids Ages 8-13

Beginner / Intermediate Adults

Advanced Adults

Tiger Team - Elite Competition Team 
Monday: 3:00 – 8:00 PM 
Tuesday: 3:00 – 8:00 PM 
Wednesday: 3:00 – 8:00 PM 
Thursday: 3:00 – 8:00 PM 
Friday: Closed 
Saturday: Closed 
Sunday: Closed

*/
//var hoursJSON = '{ "Hours" : [ { "Monday": [{ "Start": "0900", "Finish": "1300" },{ "Start": "1400", "Finish": "1800" }]},{ "Tuesday":[{ "Start": "0900", "Finish": "1300" },{ "Start": "1400", "Finish": "1800" }]},{ "Wednesday":[{ "Start": "0900", "Finish": "1300" },{ "Start": "1400", "Finish": "1800" }]},{ "Thursday":[{ "Start": "0900", "Finish": "1300" },{ "Start": "1400", "Finish": "1800" }]},{ "Friday":[{ "Start": "0900", "Finish": "1300" },{ "Start": "1400", "Finish": "1800" }]},{ "Saturday":[]},{ "Sunday":[]}]}';
//var hoursJSON = '"Days": [{"Monday": ';
var hoursJSON = '{"Days": [{ "day": "Monday", "open": "3:00PM", "close": "8:00PM"},{ "day": "Tuesday", "open": "3:00PM", "close": "8:00PM"},{ "day": "Wednesday", "open": "3:00PM", "close": "8:00PM"},{ "day": "Thursday", "open": "3:00PM", "close": "8:00PM"},{ "day": "Friday", "open": "Closed", "close": "Closed"},{ "day": "Saturday", "open": "Closed", "close": "Closed"},{ "day": "Sunday", "open": "Closed", "close": "Closed"}], "Classes": [{ "classes": "Beginner Adults", "day": "Monday", "start": "6:00PM", "finish": "6:45PM" }]}';
var testJSON = '{"hours": "","open": "8:00","close": "5:00","days": "Monday - Thursday"}';
var contactJSON = '{"name": "Drew Taylor", "phone": "803-359-3632", "email": "skc@gmail.com", "address": "528 Columbia Ave <br>Lexington, SC 29072 <br>United States"}';
var aboutJSON = '{"info": "This is karate at its finest!"}';
var newStudentJSON = '{"info": "New Students get two free lessons."}';
var glossaryJSON = '{"info": "first kata"}';
var formsJSON = '{"info": "forms to use"}';

//Call to function with anonymous callback
loadJSON(function(response) {
	var hourHeading = "<tr> <th>Day</th><th>Open</th><th>Close</th> </tr>";
	var classHeading = "<tr> <th>Class</th><th>Day</th><th>Start</th><th>Finish</th> </tr>";
	var tableData = "";
	var classData = "";
	var hoursResponse = JSON.parse(hoursJSON);
	for (var key in hoursResponse) {
		if (key == "Days") {
			var daysOpen = hoursResponse[key];
			for (var i = 0; i < daysOpen.length; i++) {
				var row = "<tr> <td>" + daysOpen[i].day + "</td><td>" + daysOpen[i].open + "</td><td>" + daysOpen[i].close + "</td></tr> ";
				tableData = tableData + row;
			}
		}
		else if (key == "Classes") {
			var classes = hoursResponse[key];
			for (var i = 0; i < classes.length; i++) {
				var row = "<tr> <td>" + classes[i].classes + "</td><td> " + classes[i].day + "</td><td>" + classes[i].start + "</td><td>" + classes[i].finish + "</td></tr> ";
				classData = classData + row;
			}
		}
	}
	document.getElementById("hoursText").innerHTML = "<table>" + hourHeading + tableData + "</table>"; 
	document.getElementById("classText").innerHTML = "<table>" + classHeading + classData + "</table>";


	var contactResponse = JSON.parse(contactJSON);
	var contactInfo = contactResponse.name + "<br>"
		+ "Address:" + "<br> " + contactResponse.address + "<br>"
		+ "Call: <a href=\"tel:" + contactResponse.phone + "\">" + contactResponse.phone + "</a>" + "<br>" 
		+ "Text: <a href=\"sms:" + contactResponse.phone + "\">" + contactResponse.phone + "</a>" + "<br>" 
		+ "Email: <a href=\"mailto:" + contactResponse.email + "\">" + contactResponse.email + "</a>";
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
		//menuOptions[i].addEventListener("click", function() {closePage();document.getElementById("hours").style.display='block';closeNav();});
		menuOptions[i].addEventListener("click", function() {menuClick("hours")});
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

function menuClick(item) {
	closePage();
	document.getElementById(item).style.display = "block";
	closeNav();
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


