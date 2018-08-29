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
        console.log(picture);
        console.log(image);
        console.log(name);
        console.log(id);
        const cardMovies = `<div onclick='showOneByOne(${id});' class='showMovie btn img-thumbnail col-sm-6 col-md-4 col-lg-4' data-toggle="modal" data-target="#exampleModalLong"><img class= "img-fluids" src='${image}'/><h5>${name}</h5></div>`
        container.innerHTML += cardMovies;   
    });
    
}
const showOneByOne = (id) => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}`)
    .then((response) => {
        console.log(response);
        return response.json();
    }).then((data) => {
        console.log(data);
        const showMovie = document.getElementById('modal-body');
        const templateMovieId = `<div class="modal-dialog" role="document">
        <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div class="modal-body">
        ...
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
        </div>
        </div>
        </div>`;
        showMovie.innerHTML = templateMovieId;
        
    }).catch((err) => {
        debugger
        console.log('Ups! Ocurrio un error');
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



// const showMovieModal = (id) =>{
    
//     fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}`)
//     .then((response) => {
//         console.log(response);
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//         showOneByOne(data.results);
        
        
//     }).catch((err) => {
//         console.log('Ups! Ocurrio un error');
//     });
// })



