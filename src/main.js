import { charFilterMovie } from './data.js';

import data from './data/ghibli/ghibli.js';


// Accediendo a la información de películas.
const films = data.films;

// Que se muestren las imagenes de personajes.
const charContainer = document.getElementById("charContainer");

const charImage = (characters) => {
    return `
    <div>
    <img src="${characters}">
    </div>`;
}; 

for (let i = 0; i < films.length; i++) {
    let characters = films[i].people;
    for (let j = 0; j < characters.length; j++) {
        charContainer.innerHTML += charImage(characters[j].img);
    } 
}

// Declarando variables para select de personajes.
const charByFilm = document.getElementById("charactersByFilm");
let charByFilmValues = charByFilm.options[charByFilm.selectedIndex].value;

//Que la función de filtrado se active al interactuar con el select.
charByFilm.addEventListener('change', () => {
    switch (charByFilmValues) {
        case '0':
            console.log("Todas las películas");
            break;
        
        case '1':
            console.log("Opción 2");
    
        default:
            break;
    }

} );


//console.log(example, data);


//let directors = films[i].director;
//let characterImg = characters[i].img
