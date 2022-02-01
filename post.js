let mainTitle = document.querySelector (".mainTitle")
let fbComments = document.querySelector("#face")

if (screen.width < 1000){
    fbComments.classList.add("noAparece");
} 

// FUNCTION IN POST'S PAGE REGARDING THE MACHINE WRITTING
// Is working, don't touch it!

$(function(){
   if (mainTitle.textContent.indexOf("w") == 43 || mainTitle.textContent.indexOf("w") == 16) {
      var texto = "Thank you for reading me!";
      maquina("typer",texto,100);
   } else if (mainTitle.textContent.indexOf("L") == 5){
      var texto = "Thank you for reading me!";
      maquina("typer",texto,100);
   } else if (mainTitle.textContent.indexOf("e") == 3){
      var texto = "Thank you for reading me!";
      maquina("typer",texto,100);
   } else if (mainTitle.textContent.indexOf("j") == 18){
      var texto = "Thank you for reading me!";
      maquina("typer",texto,100);
   }
   else {
      var texto = "Gracias por leerme!";
      maquina("typer",texto,100);
   }
});

function maquina(contenedor,texto,intervalo){
   // Calculamos la longitud del texto
   longitud = texto.length;
   // Obtenemos referencia del div donde se va a alojar el texto.
   tagHtml = document.getElementById(contenedor);
   tagHtml.innerHTML="";
   var i=0;
   // Creamos el timer
   timer = setInterval(function(){
      // Vamos añadiendo letra por letra y la _ al final.
      tagHtml.innerHTML = tagHtml.innerHTML.substr(0,tagHtml.innerHTML.length-1) + texto.charAt(i) + "_";
      // Si hemos llegado al final del texto..
      if(i >= longitud){
         // Salimos del Timer y quitamos la barra baja (_)
         clearInterval(timer);
         tagHtml.innerHTML = tagHtml.innerHTML.substr(0,longitud);

         maquina("typer",texto,100);
         return true;
      } else {
         // En caso contrario.. seguimos
         i++;
      }
   },intervalo);
};