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

//document.getElementById("menu").addEventListener("click", menuOptions);

function menuOptions(itemClicked){
	var menuContent = document.getElementsByClassName("options");
	for (var i = 0; i < menuContent.length; i++) {
		menuContent[i].style.display = "none";
	}
	if (itemClicked != 'home') {
		document.getElementById(itemClicked).style.display='block';
	}
	
}
function loadJSON(callback){
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

// Call to function with anonymous callback
loadJSON(function(response) {
	// Do Something with the response e.g.
	jsonresponse = JSON.parse(response);
	var hourOpen = jsonresponse.days + ": " + jsonresponse.open + " - " + jsonresponse.close;
	document.getElementById("hoursText").innerHTML = "<h3>" + hourOpen + "</h3>";

});

