window.addEventListener("load", init);

function init(){
	if(typeof(Storage)!=="undefined"){
        display();
    	var button=document.getElementById("saveMovie");
	    button.addEventListener("click",saveInfo);
	}
	else{
        	
    }
}

function saveInfo(){
	var movieName=document.getElementById("title").value;
    var movieRating=document.getElementById("rating").value;

	localStorage.setItem("movieName",movieName); 
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
        rightBox.innerHTML = "OUTPUT  <hr /><br />" + theMovie + " " + theRating;
	}
}

