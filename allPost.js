let infoPost = [];
//let infoPostSpanish = [];


// DEFINITION OF CLASS
class Post {
    constructor(identificationNumber, title, summary, accessToWeb, imageOfReference, publishDate, starRevealed) {
      this.identificationNumber = identificationNumber
      this.title = title;
      this.summary = summary;
      this.accessToWeb = accessToWeb;
      this.imageOfReference = imageOfReference;
      this.publishDate = publishDate;
      this.starRevealed = starRevealed;
    }
  }


  //Post 1 in English

  let post1 = new Post(
    "1",
    "Genes… What not even all the money of the world can buy...",
    "Cold branches and frozen leaves of a winter forest also can hold heartwarming stories...",
    "post1.html",
    "imagenes/post1_background.jpg",
    "June 13th",
    "imagenes/post1_6.jpg",
  );
  infoPost.push(post1)
  
  /*
  //Post 1 in Spanish
  let post1Spanish = new Post(
    "1",
    "Genes… Lo que ni todo el dinero del mundo puede comprar...",
    "Las ramas frías y las hojas conjeladas de un bosque en invierno también pueden atesorar historias cálidas y tiernas...",
    "post1Spanish.html",
    "imagenes/post1_background.jpg",
    "13 de Junio",
    "imagenes/post1_6.jpg",
  );
  infoPostSpanish.push(post1Spanish)
  */

  //Post 2 in English
  let post2 = new Post(
    "2",
    "A real super power based only on proteins and water",
    "Fear not! Although they're associated with the gloomy and dark, we should appreciate them as authentic and natural heroines",
    "post2.html",
    "imagenes/post2_background.png",
    "July 13th",
    "imagenes/post2_7.jpg"
  );
  infoPost.push(post2)
  
  /*
  //Post 2 in Spanish
  let post2Spanish = new Post(
    "2",
    "Un verdadero superpoder basado unicamente en proteínas y agua",
    "No tengas miedo! Aunque son asociadas a lo tenebroso y oscuro, deberiamos apreciarlas como auténticas heroinas naturales",
    "post2English.html",
    "imagenes/post2_background.png",
    "13 de Julio",
    "imagenes/post2_7.jpg"
  );
  infoPostSpanish.push(post2Spanish)
  */
  
  //Post 3 in English
  let post3 = new Post(
      "3",
      "The Light That Matters",
      "I invite you to discover that Chemistry is like magic but real.",
      "post3.html",
      "imagenes/post3_background.jpg",
      "August 13th",
      "imagenes/post3_8copy.jpg"
    );
  infoPost.push(post3);
  
  /*
  //Post 3 in Spanish
  let post3Spanish = new Post(
    "3",
    "La luz que realmente importa",
    "Los invito a descubrir que la química es como magia pero real.",
    "post3Spanish.html",
    "imagenes/post3_background.jpg",
    "13 de Agosto",
    "imagenes/post3_8copy.jpg"
  );
  infoPostSpanish.push(post3Spanish);
  */

  //Post 4 in English
let post4 = new Post(
  "4",
  "The Goddesses of the Ocean…",
  "Some species were born to be a weird deity.",
  "post4.html",
  "imagenes/post4_background.jpg",
  "September 13th",
  "imagenes/post4_12.jpg"
);
infoPost.push(post4);

/*
//Post 4 in Spanish
let post4Spanish = new Post(
  "4",
  "Las diosas del océano…",
  "Algunas especies nacieron para ser una extraña deidad.",
  "post4Spanish.html",
  "imagenes/post4_background.jpg",
  "September 13th",
  "imagenes/post4_12.jpg"
);
infoPostSpanish.push(post4Spanish);
*/

//Post 5 in English
let post5 = new Post(
  "5",
  "The natural jewelry of Africa",
  "In a way, the real king of the jungle.",
  "post5.html",
  "imagenes/post5_background.jpg",
  "October 13th",
  "imagenes/post5_14.jpg"
);
infoPost.push(post5);

/*
//Post 5 in Spanish
let post5Spanish = new Post(
  "5",
  "La joya natural de África",
  "De alguna manera, el rey verdadero de la jungla.",
  "post5Spanish.html",
  "imagenes/post5_background.jpg",
  "13 de Octubre",
  "imagenes/post5_14.jpg"
);
infoPostSpanish.push(post5Spanish);
*/

//Post 6 in English
let post6 = new Post(
  "6",
  "Emblematic and majestic being",
  "Tales and myths about them have been told for centuries...",
  "post6.html",
  "imagenes/post6_background.jpg",
  "November 13th",
  "imagenes/post6_10.jpg",
);
infoPost.push(post6);

/*
//Post 6 in Spanish
let post6Spanish = new Post(
  "6",
  "Majestuoso y emblemático ser",
  "Mitos e historias han sido contadas por años sobre éste ser viviente...",
  "post6Spanish.html",
  "imagenes/post6_background.jpg",
  "13 de Noviembre"
  //agregar imagen de protagonista revelado
);
infoPostSpanish.push(post6Spanish);
*/

//Post 7 in English
let post7 = new Post(
  "7",
  "The biggest weightlifter of the world",
  "A great talent but 'a shitty' life for this marvelous species.",
  "post7.html",
  "imagenes/post7_background.jpg",
  "December 13th"
  //agregar imagen de protagonista revelado
);
infoPost.push(post7);

/*
//Post 7 in Spanish
let post7Spanish = new Post(
  "7",
  "El mayor levantador de pesas del mundo",
  "Un gran talento pero una vida de mierda para esta maravillosa especie.",
  //editar el link para su publicacion
  "postCommingSpanish.html",
  "imagenes/post7_background.jpg",
  "13 de Diciembre"
  //agregar imagen de protagonista revelado
);
infoPostSpanish.push(post7Spanish);
*/

//Post 8 in English
let post8 = new Post(
  "8",
  "Stealth, fast and incomparable beauty",
  "...",
  //editar el link para su publicacion
  "postComming.html",
  "imagenes/post8_background.jpg",
  "February 13th"
  //agregar imagen de protagonista revelado
);
infoPost.push(post8);

/*
//Post 8 in Spanish
let post8Spanish = new Post(
  "8",
  "Sigilosa, rápida y de belleza incomparable",
  "...",
  //editar el link para su publicacion
  "postCommingSpanish.html",
  "imagenes/post8_background.jpg",
  "13 de Febrero"
  //agregar imagen de protagonista revelado
);
infoPostSpanish.push(post8Spanish);
*/


// FUNCTION IN ALL POST VIEW, PROCESING CARDS
let cardPostTitle = document.querySelectorAll(".card-title");
let cardPostSummary = document.querySelectorAll(".card-text");
let cardPostWebAccess = document.querySelectorAll(".btn");
let cardPostImageofPresentation = document.querySelectorAll(".imgAdded");
let cardPostPublicationDate = document.querySelectorAll(".text-muted");


//carga de titulos de tarjeta

//Posición 0 corresponde a NEW POST por lo tanto es la anteúltima posicion de todos los post 
  cardPostTitle[0].textContent = infoPost[infoPost.length-2].title;
  cardPostSummary[0].textContent = infoPost[infoPost.length-2].summary;
  cardPostWebAccess[0].setAttribute("href",infoPost[infoPost.length-2].accessToWeb);
  cardPostImageofPresentation[0].setAttribute("src", infoPost[infoPost.length-2].imageOfReference)
  cardPostPublicationDate[0].textContent = "Published on " + infoPost[infoPost.length-2].publishDate;

  //Posición n (lenght-1) corresponde a COMMING POST por lo tanto es la última posicion de todos los post
  cardPostTitle[cardPostTitle.length-1].textContent = infoPost[infoPost.length-1].title;
  cardPostSummary[cardPostTitle.length-1].textContent = infoPost[infoPost.length-1].summary;
  cardPostWebAccess[cardPostTitle.length-1].setAttribute("href",infoPost[infoPost.length-1].accessToWeb);
  cardPostImageofPresentation[cardPostTitle.length-1].setAttribute("src", infoPost[infoPost.length-1].imageOfReference);
  cardPostPublicationDate[cardPostTitle.length-1].textContent = "To be published on " + infoPost[infoPost.length-1].publishDate;
  // del ultimo post hay que editar el link para poder acceder al mismo  
  

  for (i = 1; i <= cardPostTitle.length-2; i++){
   //Posición 1, 2, n-1 corresponde a PREVIOUS POST PUBLISEHD por lo tanto es la antepenúltima posicion de todos los post y asi sucesivamente, menos la ultima y anteultima
  //n=5
  cardPostTitle[1].textContent = infoPost[infoPost.length-3].title;
  cardPostSummary[1].textContent = infoPost[infoPost.length-3].summary;
  cardPostWebAccess[1].setAttribute("href",infoPost[infoPost.length-3].accessToWeb);
  cardPostImageofPresentation[1].setAttribute("src", infoPost[infoPost.length-3].imageOfReference)
  cardPostPublicationDate[1].textContent = "Published on " + infoPost[infoPost.length-3].publishDate;

  cardPostTitle[2].textContent = infoPost[infoPost.length-4].title;
  cardPostSummary[2].textContent = infoPost[infoPost.length-4].summary;
  cardPostWebAccess[2].setAttribute("href",infoPost[infoPost.length-4].accessToWeb);
  cardPostImageofPresentation[2].setAttribute("src", infoPost[infoPost.length-4].imageOfReference)
  cardPostPublicationDate[2].textContent = "Published on " + infoPost[infoPost.length-4].publishDate;

  cardPostTitle[3].textContent = infoPost[infoPost.length-5].title;
  cardPostSummary[3].textContent = infoPost[infoPost.length-5].summary;
  cardPostWebAccess[3].setAttribute("href",infoPost[infoPost.length-5].accessToWeb);
  cardPostImageofPresentation[3].setAttribute("src", infoPost[infoPost.length-5].imageOfReference)
  cardPostPublicationDate[3].textContent = "Published on " + infoPost[infoPost.length-5].publishDate;

  cardPostTitle[4].textContent = infoPost[infoPost.length-6].title;
  cardPostSummary[4].textContent = infoPost[infoPost.length-6].summary;
  cardPostWebAccess[4].setAttribute("href",infoPost[infoPost.length-6].accessToWeb);
  cardPostImageofPresentation[4].setAttribute("src", infoPost[infoPost.length-6].imageOfReference)
  cardPostPublicationDate[4].textContent = "Published on " + infoPost[infoPost.length-6].publishDate;

  cardPostTitle[5].textContent = infoPost[infoPost.length-7].title;
  cardPostSummary[5].textContent = infoPost[infoPost.length-7].summary;
  cardPostWebAccess[5].setAttribute("href",infoPost[infoPost.length-7].accessToWeb);
  cardPostImageofPresentation[5].setAttribute("src", infoPost[infoPost.length-7].imageOfReference)
  cardPostPublicationDate[5].textContent = "Published on " + infoPost[infoPost.length-7].publishDate;

  cardPostTitle[6].textContent = infoPost[infoPost.length-8].title;
  cardPostSummary[6].textContent = infoPost[infoPost.length-8].summary;
  cardPostWebAccess[6].setAttribute("href",infoPost[infoPost.length-8].accessToWeb);
  cardPostImageofPresentation[6].setAttribute("src", infoPost[infoPost.length-8].imageOfReference)
  cardPostPublicationDate[6].textContent = "Published on " + infoPost[infoPost.length-8].publishDate;
}


// FUNCION DE GIRO DE IMAGEN PARA POST PUBLICADOS
setInterval(function(){
  cardPostImageofPresentation[1].setAttribute("src",infoPost[infoPost.length-3].starRevealed);
}, 3000)
setInterval(function(){
  cardPostImageofPresentation[1].setAttribute("src",infoPost[infoPost.length-3].imageOfReference);
}, 6000)


setInterval(function(){
  cardPostImageofPresentation[2].setAttribute("src",infoPost[infoPost.length-4].starRevealed);
}, 3000)
setInterval(function(){
  cardPostImageofPresentation[2].setAttribute("src",infoPost[infoPost.length-4].imageOfReference);
}, 6000)

setInterval(function(){
  cardPostImageofPresentation[3].setAttribute("src",infoPost[infoPost.length-5].starRevealed);
}, 3000)
setInterval(function(){
  cardPostImageofPresentation[3].setAttribute("src",infoPost[infoPost.length-5].imageOfReference);
}, 6000)


setInterval(function(){
  cardPostImageofPresentation[4].setAttribute("src",infoPost[infoPost.length-6].starRevealed);
}, 3000)
setInterval(function(){
  cardPostImageofPresentation[4].setAttribute("src",infoPost[infoPost.length-6].imageOfReference);
}, 6000)

setInterval(function(){
  cardPostImageofPresentation[5].setAttribute("src",infoPost[infoPost.length-7].starRevealed);
}, 3000)
setInterval(function(){
  cardPostImageofPresentation[5].setAttribute("src",infoPost[infoPost.length-7].imageOfReference);
}, 6000)

setInterval(function(){
  cardPostImageofPresentation[6].setAttribute("src",infoPost[infoPost.length-8].starRevealed);
}, 3000)
setInterval(function(){
  cardPostImageofPresentation[6].setAttribute("src",infoPost[infoPost.length-8].imageOfReference);
}, 6000)

