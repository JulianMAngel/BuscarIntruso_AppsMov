var secciones = [];
var imagenes = [];
var preguntas [];

var tiempo_splash = 3000;
    
window.onload = function(){
    inicializarReferencias();
    setTimeout(cambiarSplash,tiempo_splash);
}
    
function inicializarReferencias(){
    secciones[1] = document.getElementById("seccion_1");
    secciones[2] = document.getElementById("seccion_2");
    secciones[3] = document.getElementById("seccion_3");
    secciones[4] = document.getElementById("seccion_4");
    secciones[5] = document.getElementById("seccion_5");
    imagenes[1] = document.getElementById("primera_imagen");
    imagenes[2] = document.getElementById("segunda_imagen");
    imagenes[3] = document.getElementById("tercera_imagen");
    imagenes[4] = document.getElementById("cuarta_imagen");
    preguntas[1] = document.getElementById("pregunta_uno");
    preguntas[2] = document.getElementById("pregunta_dos");
    preguntas[3] = document.getElementById("pregunta_tres");
    preguntas[4] = document.getElementById("pregunta_cuatro");

}
    
function cambiarSplash(){
    secciones[1].className = "splash oculto";
    secciones[2].className = "inicio animated bounceInDown";
}
    
function cambiarSeccion(id_seccion){
    for (var i in secciones) {
        secciones[i].classList.add("oculto");
    }
    secciones[id_seccion].classList.remove("oculto");

}

function puntuacion(id_pregunta){
    for (var i in preguntas) {
        secciones[i].classList.add("oculto");
    }
    secciones[id_seccion].classList.remove("oculto");

}

function carga(){
    contador_s=0;
    contador_m=0;
    s = document.getElementById("segundos");
    m = document.getElementById("minutos");
    
    window.setInterval(
        function(){
            if(contador_s==60){
                
                contador_s=0;
                contador_m++;
                m.innerHTML = contador_m;
                
                if(contador_m==0){
                    
                    contador_m=0;
                }
            }
            
            s.innerHTML = contador_s;
            contador_s++;
        }
        ,1000);
}