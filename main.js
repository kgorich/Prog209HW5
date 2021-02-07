window.addEventListener("load", init);


movie_arr = [];

function init() {
    document.getElementById('saveMovie').addEventListener('click', saveInfo);
    document.getElementById('displayMovie').addEventListener('click', display);
}

function saveInfo() {
    let movieNameNode = document.getElementById("title");
    let movieRatingNode = document.getElementById("rating");

    let new_movie = new Movie(movieNameNode.value, movieRatingNode.value);

    if (new_movie.validate()) {
        movie_arr.push(new_movie);

        movieNameNode.value = '';
        movieRatingNode.value = '';
        console.log(movie_arr);

    } 
    else {
        alert('Save Failed! Try Again');
    }
}

function display() {
    let rightBox = document.getElementById("useroutput");

    let list = document.createElement('ul');

    rightBox.innerHTML = 'Movie Rating List <hr /> <br /> <br />';

    movie_arr.forEach(function (item, index) {
        console.log(item, index);
        let list_item = document.createElement('li');
        list_item.appendChild(document.createTextNode(item.toString()));
        list.appendChild(list_item);
    });
    
    rightBox.appendChild(list);
}

