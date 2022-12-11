	/*
  console.log("Hola desde JavaScript Nene es externo");

  //DOM para seleccionar solo un elemnto querySelector
  let table = document.querySelector(".table");

  console.log(table);

  //DOM para seleccionar varios elementos querySelectorAll
  let links = document.querySelectorAll("a");

links.forEach(function(links){

  console.log(links);
})*/

//Eventos

let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){

  td.addEventListener('click', function(){
    console.log(this);

  })
});