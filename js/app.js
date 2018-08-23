const key= "685d851e2a649cd92b21f6de3a19b278";

fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}`)
.then((response) => {
    console.log(response);
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log('Ups! Ocurrio un error');
});