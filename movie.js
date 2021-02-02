function Movie(title, rating){
    this.movieTitle = title;
    this.movieRating = rating;
}


function MovieValidate(){
let myMovie = new Movie();
myMovie.movieTitle = document.getElementById("title").value;
myMovie.movieRating = document.getElementById("rating").value;
}