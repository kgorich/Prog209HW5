class Movie {
    constructor(title, rating) {
        this.movieTitle = title;
        this.movieRating = rating;
    }
    toString() {
        return `${this.movieTitle} ${this.movieRating}`;
    }
}


function MovieValidate(){
let myMovie = new Movie();
myMovie.movieTitle = document.getElementById("title").value;
myMovie.movieRating = document.getElementById("rating").value;

if(myMovie.movieTitle = ""){
return false;
}
else if(myMovie.movieRating < 1 || myMovie.movieRating > 5 || myMovie.movieRating == ""){
return false;
}
else{
    return true;
}
}

