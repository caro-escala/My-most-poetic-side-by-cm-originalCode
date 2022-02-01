
var tmax_opts = {
    delay: 0.5,
    repeat: 0,
    repeatDelay: 0.5,
    yoyo: true
  };
  
  var tmax_tl = new TimelineMax(tmax_opts),
      polyland_shapes   = $('svg.landscape polygon'),
      polyland_stagger  = 0.00475,
      polyland_duration = 1.0;
  
  CSSPlugin.useSVGTransformAttr = true; // Thanks Jack Doyle@GreenSock for the tip!
  
  var polyland_staggerFrom = {
    scale: 0,
    opacity: 0,
    transformOrigin: 'center center',
    ease: Elastic.easeInOut,
    force3D: true
  };
  
  var polyland_staggerTo = {
    opacity: 1,
    scale: 1,
    ease: Elastic.easeInOut,
    force3D: true
  };
  
  tmax_tl.staggerFromTo(polyland_shapes, polyland_duration, polyland_staggerFrom, polyland_staggerTo, polyland_stagger, 0);
  
  

  $(function(){
   var texto = "My most poetic side is creating new content for 'Marvelous Dwellers'...";
   maquina("typer",texto,100,0);
  });
  
  function maquina(contenedor,texto,intervalo,n){
   var i=0,
    // Creamos el timer
    timer = setInterval(function() {
    if ( i<texto.length ) {
     // Si NO hemos llegado al final del texto..
     // Vamos añadiendo letra por letra y la _ al final.
     $("#"+contenedor).html(texto.substr(0,i++) + "_");
    } else {
     // En caso contrario..
     // Salimos del Timer y quitamos la barra baja (_)
     clearInterval(timer);
     $("#"+contenedor).html(texto);
     // Auto invocamos la rutina n veces (0 para infinito)
     if ( --n!=0 ) {
      setTimeout(function() {
       maquina(contenedor,texto,intervalo,n);
      },3600);
     }
    }
   },intervalo);
  };