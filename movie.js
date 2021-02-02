function Movie(title, rating){
    this.movieTitle = title;
    this.movieRating = rating;
}


function MovieValidate(){
let myMovie = new Movie();
myMovie.movieTitle = document.getElementById("title").value;
myMovie.movieRating = document.getElementById("rating").value;

if(myMovie.movieTitle = ""){
alert("Movie title cannot be blank")
}
else if(myMovie.movieRating < 1 || myMovie.movieRating > 5 || myMovie.movieRating == ""){
alert("you must enter a rating that is between 1-5")
}
else{
    return myMovie.ToString();
}
}