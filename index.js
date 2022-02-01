
// DECLARACION OF VARIABLES
let eng = document.querySelector("#english")
let cast = document.querySelector("#spanish")
let postsInMainPage = document.querySelectorAll(".postAnnounced");
let postsInMainPageLinks = document.querySelectorAll(".postAnnouncedLink");
let infoPost = [];
let infoPostSpanish = [];
let home = document.querySelector("#home")
let publications = document.querySelector("#publications")
let aboutMe = document.querySelector("#aboutMe")
let mainSubTitle = document.querySelector(".mainH2")
let mainTitle = document.querySelector(".mainH1")
let paragraph1 = document.querySelector("#one")
let paragraph2 = document.querySelector("#two")
let paragraph3 = document.querySelector("#three")
let paragraph4 = document.querySelector("#four")
let paragraph4Bis = document.querySelector("#fourBis")
let seriesTitle = document.querySelector(".mainH3")
let paragraph5 = document.querySelector("#five")
let paragraph6 = document.querySelector("#six")
let paragraph7 = document.querySelector("#seven")
let paragraph8 = document.querySelector("#eight")
let timing = document.querySelector("#aboutTiming")
let last = document.querySelector("#last")
let next = document.querySelector("#next")
let newPost = document.querySelector("#new")
let end = document.querySelector("#end")
let askClue = document.querySelector(".askClue")
let clue = document.querySelector(".clue")
let contact = document.querySelector("#contact")

english.addEventListener("click", function () {
  location.reload()
});


// DEFINITION OF CLASS
class Post {
  constructor(identificationNumber, title, summary, accessToWeb, imageOfReference, publishDate, starRevealed) {
    this.identificationNumber = identificationNumber;
    this.title = title;
    this.summary = summary;
    this.accessToWeb = accessToWeb;
    this.imageOfReference = imageOfReference;
    this.publishDate = publishDate;
    this.starRevealed = starRevealed;
  }
}

// ADITION OF NEW POST

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

//Post 2 in English
let post2 = new Post(
  "2",
  "A real super power based only on proteins and water",
  "Fear not! Although they're associated with the gloomy and dark, we should appreciate them as authentic and natural heroines",
  "post2.html",
  "imagenes/post2_background.jpg",
  "July 13th",
  "imagenes/post2_7.jpg"
);
infoPost.push(post2)

//Post 2 in Spanish
let post2Spanish = new Post(
  "2",
  "Un verdadero superpoder basado unicamente en proteínas y agua",
  "No tengas miedo! Aunque son asociadas a lo tenebroso y oscuro, deberiamos apreciarlas como auténticas heroinas naturales",
  "post2English.html",
  "imagenes/post2_background.jpg",
  "13 de Julio",
  "imagenes/post2_7.jpg"
);
infoPostSpanish.push(post2Spanish)

//Post 3 in English
let post3 = new Post(
    "3",
    "The Light That Matters",
    "I invite you to discover that Chemistry is like magic but real.",
    "post3.html",
    "imagenes/post3_background.jpg",
    "August 13th",
    "imagenes/post3_8.jpg"
  );
infoPost.push(post3);

//Post 3 in Spanish
let post3Spanish = new Post(
  "3",
  "La luz que realmente importa",
  "Los invito a descubrir que la química es como magia pero real.",
  "post3Spanish.html",
  "imagenes/post3_background.jpg",
  "13 de Agosto",
  "imagenes/post3_8.jpg"
);
infoPostSpanish.push(post3Spanish);

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

//Post 6 in Spanish
let post6Spanish = new Post(
  "6",
  "Majestuoso y emblemático ser",
  "Mitos e historias han sido contadas por años sobre éste ser viviente...",
  "post6Spanish.html",
  "imagenes/post6_background.jpg",
  "13 de Noviembre",
  "imagenes/post6_10.jpg",
);
infoPostSpanish.push(post6Spanish);

//Post 7 in English
let post7 = new Post(
  "7",
  "The biggest weightlifter of the world",
  "A great talent but a shitty life for this marvelous species.",
  "post7.html",
  "imagenes/post7_background.jpg",
  "December 13th"
  //agregar imagen de protagonista revelado
);
infoPost.push(post7);

//Post 7 in Spanish
let post7Spanish = new Post(
  "7",
  "El mayor levantador de pesas del mundo",
  "Un gran talento pero una vida de mierda para esta maravillosa especie.",
  "post7Spanish.html",
  "imagenes/post7_background.jpg",
  "13 de Diciembre"
  //agregar imagen de protagonista revelado
);
infoPostSpanish.push(post7Spanish);


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



// FUNCTIONS IN MAIN PAGE 

setInterval(function(){
  last.classList.toggle("intervalHighlightVersion2");
  newPost.classList.toggle("intervalHighlightVersion2");
  next.classList.toggle("intervalHighlightVersion2");
}, 0500)


for (i = 0; i < postsInMainPage.length; i++) {
  //está configurado para que ya quede automático
  //Posición 0 corresponde a NEW POST por lo tanto es la anteúltima posicion de todos los post 
  postsInMainPage[0].textContent = infoPost[infoPost.length-2].title;
  postsInMainPageLinks[0].setAttribute("href",infoPost[infoPost.length-2].accessToWeb);
  //Posición 1 corresponde a PREVIOUS POST por lo tanto es la antepenúltima posicion de todos los post
  postsInMainPage[1].textContent = infoPost[infoPost.length-3].title;
  postsInMainPageLinks[1].setAttribute("href",infoPost[infoPost.length-3].accessToWeb);
  //Posición 2 corresponde a COMMING POST por lo tanto es la última posicion de todos los post
  postsInMainPage[2].textContent = infoPost[infoPost.length-1].title;
  postsInMainPageLinks[2].setAttribute("href",infoPost[infoPost.length-1].accessToWeb);
  // del ultimo post hay que editar el link para poder acceder al mismo
}

/*
askClue.addEventListener("click", function(){
  clue.classList.remove("noShowed");
  }
)
*/

// CODE FOR TRANSLATING
spanish.addEventListener("click", function () {
  home.textContent = "Inicio";
  publications.textContent = "Publicaciones";
  aboutMe.textContent = "Sobre mi";
  eng.textContent = "Inglés";
  cast.textContent = "Español";
  mainSubTitle.textContent = "Te entrego mi voz y...";
  mainTitle.textContent = "Mi lado más poético";  
  paragraph1.textContent = "¿Te has dado cuenta que los seres humanos nos encontramos persiguiendo el descubrimiento de cosas que la naturaleza ya atesora?";
  paragraph2.textContent = "Mientras nuestra especie está constantemente mejorando en conocimiento y tecnología de vanguardia,";
  paragraph3.textContent = "desarrollando inventos casi de otro mundo,";
  paragraph4.textContent = "el Planeta Tierra nos muestra verdadera magia cada día.";
  paragraph4Bis.textContent = "Les presento la serie:";
  seriesTitle.textContent = "Habitantes Maravillosos";
  paragraph5.textContent = "Este blog tiene como intención acercarnos un poco más a la naturaleza. Eso es todo.";
  paragraph6.textContent = "Tengo esta idea medio romántica que si hago un buen trabajo compartiendo mi visión del mundo natural, tal vez y con mucha suerte, al menos uno de ustedes podrá empezar a disfrutarlo de la misma manera que yo. Quizás luego de leer mis posteos inspiracionales puedas ver la vida alrededor con otros ojos y dejarte asombrar por ella….";
  paragraph7.textContent = "Esta es mi manera de invitarlos a ser más gentiles con nuestro maravilloso Planeta Tierra.";
  paragraph8.textContent = "Así que, sin más que decir, les entrego mi voz y mi lado más poético. Espero sinceramente que lo disfruten.";
  timing.textContent = "Voy a desarrollar el tema en una serie de entregas mensuales";
  newPost.textContent = "Nuevo Post";
  last.textContent = "Post anterior";
  next.textContent = "Próximamente";
  end.textContent = "Escrito, creado y traducido por Caro_escala";
  clue.textContent = "Si querés ver una pista anticipadamente, podés leer la Intro desde la Sección de Publicaciones";
  publications.setAttribute("href", "allPostSpanish.html"); 
  aboutMe.setAttribute("href","aboutMeSpanish.html");
  contact.textContent = "Me encantaría estar en contacto!";
    for (i = 0; i < postsInMainPage.length; i++) {
    //está configurado para que ya quede automático
  //Posición 0 corresponde a NEW POST por lo tanto es la anteúltima posicion de todos los post 
  postsInMainPage[0].textContent = infoPostSpanish[infoPostSpanish.length-2].title;
  postsInMainPageLinks[0].setAttribute("href",infoPostSpanish[infoPostSpanish.length-2].accessToWeb);
  //Posición 1 corresponde a PREVIOUS POST por lo tanto es la antepenúltima posicion de todos los post
  postsInMainPage[1].textContent = infoPostSpanish[infoPostSpanish.length-3].title;
  postsInMainPageLinks[1].setAttribute("href",infoPostSpanish[infoPostSpanish.length-3].accessToWeb);
  //Posición 2 corresponde a COMMING POST por lo tanto es la última posicion de todos los post
  postsInMainPage[2].textContent = infoPostSpanish[infoPostSpanish.length-1].title;
  postsInMainPageLinks[2].setAttribute("href",infoPostSpanish[infoPostSpanish.length-1].accessToWeb);
  // del ultimo post hay que editar el link para poder acceder al mismo
  }
});









