class Movie {

    constructor(title, rating) {
        this.movieTitle = title.trim();
        this.movieRating = rating.trim();
    }

    validate() {

        if (this.movieTitle == '') {
            return false;
        }
        else if (this.movieRating == '' || this.movieRating < 1 || this.movieRating > 5) {
            return false;
        }
        else {
            return true;
        }
    }

    toString() {
        return '${this.movieTitle}   ${this.movieRating} ';
    }
}
