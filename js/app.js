$(document).ready(()=> {
    $('#myModal').modal(options)
})

const key= "685d851e2a649cd92b21f6de3a19b278";
const printingMovies = (movies)=> {
    const container= document.getElementById('movies');
    container.innerHTML = '';
    movies.forEach((movie) => {
        let picture = movie.poster_path;
        let image = `https://image.tmdb.org/t/p/w300${picture}`;
        let name = movie.title;
        let id = movie.id;
        const cardMovies = `<div onclick='showOneByOne(${id});' class='showMovie btn img-thumbnail col-sm-6 col-md-4 col-lg-4' data-toggle="modal" data-target="#exampleModalLong">
                                <img class= "img-fluid" src='${image}'/>
                                <h5 class='titles'>${name}</h5>
                            </div>`;
        container.innerHTML += cardMovies;   
    });
}

fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}`)
.then((response) => {
    console.log(response);
    return response.json();
}).then((data) => {
    console.log(data);
    printingMovies(data.results);
    showMovies(data.results);
}).catch((err) => {
    console.log('Ups! Ocurrio un error');
});

/*********************fetch GET movie by movie/id ************/
const showOneByOne = (id) => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}`)
    .then((response) => {
        console.log(response);
        return response.json();
    }).then((data) => {
        console.log(data);
        let name = data.original_title; 
        let overview = data.overview;
        let picture = data.backdrop_path;
        let getPicture = `https://image.tmdb.org/t/p/w300${picture}`;
        let genres = data.genres;
        let templateTitle = `<h5 class="modal-title" id="exampleModalLongTitle">${name}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button`
        let image = `<div class = "col-12 text-center">
                        <img src= "${getPicture}" class="img-fluid img-thumbnail">
                    </div>`;
        let overviewTemplate = `<div>
                                    <p class= "paragraph">${overview}</p>
                                </div>`;
        let genresList = "<ul>";
        for(let i =0; i < genres.length; i++){
            genresList += `<li>${genres[i].name}</li>`;
        }
        genresList += "</ul>";
/********************* Printing modal data ***************/
        const title = document.getElementById('modal-header');
        title.innerHTML = templateTitle;

        const showMovie = document.getElementById('modal-body');
        showMovie.innerHTML = image;
        const templateMovieId = genresList;
        showMovie.innerHTML += templateMovieId;
        showMovie.innerHTML += overviewTemplate;
    }).catch((err) => {
        console.log('Ups! Ocurrio un error');
    });
}

