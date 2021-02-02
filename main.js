
/* With web storage, web applications can store data locally within the user's browser.
Before HTML5, application data had to be stored in cookies, included in every server request.
Web storage is more secure, and large amounts of data can be stored locally, without affecting website performance.
Unlike cookies, the storage limit is far larger(at least 5MB) and information is never transferred to the server.
Web storage is per origin(per domain and protocol).
All pages, from one origin, can store and access the same data.
HTML web storage provides two objects for storing data on the client:
    window.localStorage - stores data with no expiration date
    window.sessionStorage - stores data for one session (data is lost when the browser tab is closed)

The localStorage object stores the data with no expiration date. 
The data will not be deleted when the browser is closed, and will be available the next day, week, or year.

// Store
localStorage.setItem("lastname", "Smith");

// Retrieve
document.getElementById("result").innerHTML = localStorage.getItem("lastname");

The sessionStorage object is equal to the localStorage object, except that it stores the data for only one session.
The data is deleted when the user closes the specific browser tab.

if (sessionStorage.clickcount) {
  sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
} else {
  sessionStorage.clickcount = 1;  // adding a property to the sessionStorage object
}
document.getElementById("result").innerHTML = "You have clicked the button " +
sessionStorage.clickcount + " time(s) in this session.";
*/

window.addEventListener("load", init);

function init(){
	if(typeof(Storage)!=="undefined"){
        display();
    	var button=document.getElementById("saveMovie");
	    button.addEventListener("click",saveInfo);
	}
	else{
        //old bowser	
    }
}

function saveInfo(){
	var movieName=document.getElementById("title").value;
    var movieRating=document.getElementById("rating").value;

	localStorage.setItem("movieName",movieName); // using localStorage, so data saved even when browser closed
    localStorage.setItem("userRating", movieRating);


	display();

}

function display(){
	var rightBox=document.getElementById("useroutput");
	var theMovie=localStorage.getItem("movieName");
    var theRating = localStorage.getItem("userRating");

    if (theRating==undefined){
        rightBox.innerHTML = "";
	}
    else {
        rightBox.innerHTML = "OUTPUT  <hr /><br />" + theMovie + theRating;
	}

}