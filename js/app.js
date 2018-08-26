
const key= "685d851e2a649cd92b21f6de3a19b278";
const printingMovies = (movies)=> {
    const container= document.querySelector('.container');
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
        const cardMovies = `<div class= 'container'><img src='${image}'/><p>${name}</p></div>`
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


