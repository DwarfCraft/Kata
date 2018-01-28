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

*/
//var hoursJSON = '{ "Hours" : [ { "Monday": [{ "Start": "0900", "Finish": "1300" },{ "Start": "1400", "Finish": "1800" }]},{ "Tuesday":[{ "Start": "0900", "Finish": "1300" },{ "Start": "1400", "Finish": "1800" }]},{ "Wednesday":[{ "Start": "0900", "Finish": "1300" },{ "Start": "1400", "Finish": "1800" }]},{ "Thursday":[{ "Start": "0900", "Finish": "1300" },{ "Start": "1400", "Finish": "1800" }]},{ "Friday":[{ "Start": "0900", "Finish": "1300" },{ "Start": "1400", "Finish": "1800" }]},{ "Saturday":[]},{ "Sunday":[]}]}';
//var hoursJSON = '"Days": [{"Monday": ';
var hoursJSON = '{"Days": [{ "day": "Monday", "open": "3:00PM", "close": "8:00PM"},{ "day": "Tuesday", "open": "3:00PM", "close": "8:00PM"},{ "day": "Wednesday", "open": "3:00PM", "close": "8:00PM"},{ "day": "Thursday", "open": "3:00PM", "close": "8:00PM"},{ "day": "Friday", "open": "Closed", "close": "Closed"},{ "day": "Saturday", "open": "Closed", "close": "Closed"},{ "day": "Sunday", "open": "Closed", "close": "Closed"}], "Classes": [{ "classes": "Lil Dragons", "day": "Tuesday", "start": "5:00PM", "finish": "5:45PM" },{ "classes": "Lil Dragons", "day": "Thursday", "start": "5:00PM", "finish": "5:45PM" },{ "classes": "Intermediate Kids", "day": "Tuesday", "start": "5:45PM", "finish": "6:30PM" },{ "classes": "Intermediate Kids", "day": "Thursday", "start": "5:45PM", "finish": "6:30PM" },{ "classes": "Advanced Kids", "day": "Tuesday", "start": "6:30PM", "finish": "7:15PM" },{ "classes": "Advanced Kids", "day": "Thursday", "start": "6:30PM", "finish": "7:15PM" },{ "classes": "Intermediate Advanced Adults", "day": "Thursday", "start": "7:15PM", "finish": "8:00PM" },{ "classes": "Intermediate Advanced Adults", "day": "Thursday", "start": "7:15PM", "finish": "8:00PM" },{ "classes": "Beginner Kids", "day": "Monday", "start": "5:45PM", "finish": "6:30PM" },{ "classes": "Beginner Kids", "day": "Wednesday", "start": "5:45PM", "finish": "6:30PM" },{ "classes": "Beginner Adults", "day": "Monday", "start": "6:30PM", "finish": "7:15PM" },{ "classes": "Beginner Adults", "day": "Wednesday", "start": "6:30PM", "finish": "7:15PM" },{ "classes": "Teen Class", "day": "Monday", "start": "7:00PM", "finish": "8:00PM" },{ "classes": "Teen Class", "day": "Wednesday", "start": "7:00PM", "finish": "8:00PM" }]}';
var testJSON = '{"hours": "","open": "8:00","close": "5:00","days": "Monday - Thursday"}';
var contactJSON = '{"name": "Drew Taylor", "phone": "803-359-3632", "email": "taylorsenseiskc@gmail.com", "subject": "Information Requested", "address": "528 Columbia Ave <br>Lexington, SC 29072 <br>United States"}';
var aboutJSON = '{"info": "With 30+ years of collective experience in karate training, SKC\'s systematic approach to karate training allows for students to not only train more than twice a week, we can also adjust your scheduled day to accommodate the busy schedules of families with multiple extra-curricular activities to attend, work schedules or during vacation time!<br><br>Parents just like you in Lexington, Irmo, West Columbia, Gilbert, Batesburg-Leesville AND Red Bank, absolutely LOVE our FUN, EXCITING, and AFFORDABLE Karate Classes! Your child is going to have a blast making new friends, experiencing all that the martial arts has to offer and achieving their goals as we embark on our karate journey together", "programs": [{"name": "Lil Dragons", "info": "6-7 years", "image": "https://static.wixstatic.com/media/54049c_dd6164252b1641a5b7f85c8ab6343689~mv2_d_3024_4032_s_4_2.jpg/v1/fill/w_437,h_583,al_c,q_90,usm_0.66_1.00_0.01/54049c_dd6164252b1641a5b7f85c8ab6343689~mv2_d_3024_4032_s_4_2.webp"},{"name": "Beginner Kids", "info": "8-13 years"},{"name": "Intermediate Kids", "info": "8-13 years"},{"name": "Advanced Kids", "info": "8-13 years"},{"name": "Teen Class", "info": "13-18 years"},{"name": "Beginner / Intermediate Adults", "info": "13+ years"},{"name": "Advanced Adults", "info": "13+ years"}]}';
var newStudentJSON = '{"info": "Shotokan Karate Centers has been providing excellence in martial arts instruction to Lexington and its surrounding areas since 1994. By training traditional Japanese karate with us at SKC, our elite athletes develop the core values of our premier martial arts program which include focus, self-discipline, perseverance and goal-setting! <br><br> Fitness is crucial to advancement in karate. Warming ups include jumping jacks, push-ups, sit-ups, squats along with circuit drills, kata (forms) and kumite (sparring) training after a series of specially selected stretches that optimize athletic performance and safety when practicing martial arts. Everything we do at Shotokan Karate Centers has been tested and perfected over our combined 30+ years of experience teaching martial arts in the Lexington area. Beyond the techniques we learn through our training, martial artists are known for being toned, flexible and physically fit.<br>Your child can experience these same benefits as well!<br>Self-Defense, the ability to depend yourself against an assailant, is an empowering feeling. Karate uses self-defense as a central focal point in our training at Shotokan Karate Centers. In addition to defensive and offensive techniques, our instruction address the where and when using karate techniques is acceptable. For example, at home is a clear area under mom and dad\'s supervision!<br>Respect goes hand and hand with all aspects of karate training! Punching, kicking and throwing are secondary to safety and respect for our fellow practitioners and those that make our training possible such as instructors and mom and dad. We practice bowing as a sign of respect, appreciation and as an expression of mindfulness towards safety when practicing with our karate-ka friends!<br>Self-confidence is apparent in any child or adult that practices karate! Confidence in ourselves is key when making decisive moves in sparring or when preforming forms at testing or competition! By setting goals and achieving them, karate practitioners of all ages feel a sense of accomplishment and see progress in the form of rank advancement!"}';
var glossaryJSON = '{"info": "first kata"}';
var beltJSON = '{"belt": ["White", "Yellow", "Orange", "Green", "Blue", "Purple", "Brown", "Black"]}';
var kataJSON = '{"name": ["Heion Showdon", "Heion Neidon"]}';
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
		+ "Address:" + "<br> <a href=\"geo:0,0?q=" + contactResponse.address + "\">" + contactResponse.address + "</a>" + "<br>"
		+ "Call: <a href=\"tel:" + contactResponse.phone + "\">" + contactResponse.phone + "</a>" + "<br>" 
		+ "Text: <a href=\"sms:" + contactResponse.phone + "\">" + contactResponse.phone + "</a>" + "<br>" 
		+ "Email: <a href=\"mailto:" + contactResponse.email + "?subject=" + contactResponse.subject + "\">" + contactResponse.email + "</a>";
	document.getElementById("contactText").innerHTML = "<h3>" + contactInfo + "</h3>";

	var aboutResponse = JSON.parse(aboutJSON);
	var aboutInfo = aboutResponse.info + "<br>";
	var aboutHeading = "<tr> <th>Name</th><th>Ages</th> </tr>";
	var aboutData = "";
	for (var key in aboutResponse.programs) {
		var program = aboutResponse.programs[key];
		var row = "<tr> <td>" + aboutResponse.programs[key].name + "</td><td>" + aboutResponse.programs[key].info + "</td><td>" 
			+ "<img src=\"" + aboutResponse.programs[key].image + "\"/>" + "</td></tr> ";
		aboutData = aboutData + row;
	}
	document.getElementById("aboutText").innerHTML = "<h3>" + aboutInfo + "</h3>";
	document.getElementById("programText").innerHTML = "<table>" + aboutHeading + aboutData + "</table>";
	
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


