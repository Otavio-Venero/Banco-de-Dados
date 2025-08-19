// lendo o codigo
const fs = require("fs");
let jsonString = fs.readFileSync( "listaanimes.json");
console.log("lista de animes: ");
const listaanimes = JSON.parse(jsonString)
console.log(listaanimes);

console.log("\n\n\n\n");

// adicionando um novo anime na tier list
const novoanime ={
    "name": "Black Clover",
    "rate": "9.6",
    "description": "Anão que quer muito ser O rei mago, tendo que competir com um principe todo buffado"
}
listaanimes.push(novoanime)
console.log(listaanimes);

// faz uma filtragem da lista de animes para aparecer somente acima de 9
const animesfiltrados = listaanimes.filter(anime => anime.rate > 9);
console.log("\n\n\n\n");

console.log(animesfiltrados);
