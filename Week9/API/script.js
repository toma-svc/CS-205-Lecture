const apiKey = "2dc52b2b"; // api key for omdbapi
let movies = [];

document.addEventListener("DOMContentLoaded", () => {
    // here goes our event handlers. Here we know that DOM is fully loaded
    // tom's pet peeve
    document.querySelector("#movie").focus();

    // find the button
    const searchButton = document.getElementById('btnSearch');
    // add the event listener
    searchButton.addEventListener("click", (event) => {
        // let's make sure we did it right
        // alert('hey, that tickles');
        // grab the text from the input box
        const searchTerm = document.getElementById('movie').value.trim();
        // go grab all the movies from the API
        getMovies(searchTerm);
    })
})

function getMovies(searchTerm) {
    // async call
    axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`)
        .then((response) => {
            // this is the only section of code where we have our data.
            console.log(response);
            // let's build out our movies
            movies = response.data.Search;
            // let's add them to the page
            const movieBox = document.getElementById('movie-box');
            // clear out the old before we put in the new
            movieBox.textContent = "";

            // loop through the array and add items to the page
            movies.forEach(element => {
                // build the movie using the template
                const movieElement = buildMovie(element);
                // add the movie to the movieBox
                movieBox.appendChild(movieElement);
            });
            console.log(movies);
        })
        .catch(error => {
            alert("Something went wrong!")
        })
    console.log("After axios");
}

function buildMovie(movieItem) {
    // check to make sure the browser supports template
    if ('content' in document.createElement('template')) {
        // grab the stuff in the template                 clone the tags and data inside the template
        const tmp = document.getElementById('movie-card').content.cloneNode(true);
        // find each element inside the template and add the data
        tmp.getElementById('movie-title').textContent = movieItem.Title;
        tmp.getElementById('movie-year').textContent = "Released: " + movieItem.Year;
        tmp.getElementById('movie-poster').src = movieItem.Poster;
        // return the element
        return tmp;

    } else {
        alert("Time to upgrade your browser");
    }
}