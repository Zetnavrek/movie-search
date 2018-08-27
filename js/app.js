
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
        const cardMovies = `<div onclick='showMovies();' class='showMovie col-sm-6 col-md-4 col-lg-4'><img class= "img-fluid" src='${image}'/><h5>${name}</h5></div>`
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
    //document.addEventListener('click','.showMovie');
    showMovies(data.results);
}).catch((err) => {
    console.log('Ups! Ocurrio un error');
});


const showMovies = (data) =>{
    data.forEach((movie) =>{
        let id = movie.id;
        console.log(id);
fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}`)
.then((response) => {
    console.log(response);
    return response.json();
}).then((data) => {
    console.log(data);
    
}).catch((err) => {
    console.log('Ups! Ocurrio un error');
});
})
}


