var secciones = [];
var preguntas = [];
var tiempo_splash = 3000;

var intervalo;
var contador_tiempo;
var tiempoRestante = 11;
var tiempoActual = 0;

var salir;
var continuar;

var contador_puntaje;
var score =1;
var empezar;



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
    secciones[6] = document.getElementById("menu_stop");
    secciones[7] = document.getElementById("continuar");
    preguntas[1] = document.getElementById("primera_pregunta");
    preguntas[2] = document.getElementById("segunda_pregunta");
    preguntas[3] = document.getElementById("tercera_pregunta");
    preguntas[4] = document.getElementById("cuarta_pregunta");
    contador_tiempo = document.getElementById("cuenta");
    contador_puntaje = document.getElementById("puntaje");
    salir = document.getElementById("menu_stop");
    continuar = document.getElementById("continuar");

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

function comenzarJuego(){
    secciones[2].className = "inicio oculto";
    secciones[4].className = "instrucciones oculto";
    secciones[5].className = "creditos oculto";
    secciones[6].className = "salir oculto";
    secciones[7].className = "despausar oculto";
    secciones[3].className = "juego";
    preguntas[1].className = "pregunta1";
    preguntas[2].className = "pregunta2 oculto";
    preguntas[3].className = "pregunta3 oculto";
    preguntas[4].className = "pregunta4 oculto";

    activarTiempo();
    reset();
}

function activarTiempo(){
    if(intervalo){
        clearInterval(intervalo);
    }
    tiempoActual = 10;
    contador_tiempo.innerHTML = tiempoActual;
    intervalo = setInterval(tiempo, 1000);
}


function tiempo(){
    tiempoActual--;
    contador_tiempo.innerHTML = tiempoActual;
    if(tiempoActual===0){
        clearInterval(intervalo);
    }
}


function salida(){
    salir.className = "salir";
    pausar();
}

function respuestaIncorrecta(id_seccion){
    alert("Tu repuesta ha sido incorrecta")
    for (var i in secciones) {
        secciones[i].classList.add("oculto");
    }
    secciones[id_seccion].classList.remove("oculto");

}


function respuestaCorrecta(id_pregunta){
    
    for (var i in preguntas) {
        preguntas[i].classList.add("oculto");
    }
    contador_puntaje.innerHTML = score++ + "0  PUNTOS";
    preguntas[id_pregunta].classList.remove("oculto");
    activarTiempo();
}


function reset(){
    score = 1;
    empezar = 0;
    contador_puntaje.innerHTML =empezar + " PUNTOS";
}



function pausar(){
    clearInterval(intervalo);
    continuar.className = "texto_continuar";
}

function regresar(){
    secciones[3].className = "juego oculto";
    secciones[2].className = "inicio animated bounceInDown";
    clearInterval(intervalo);
}

function cancelar(){
    secciones[6].className = "pausa oculto";
    secciones[7].className = "continuar oculto";

}
/* Pendientes
    Pausa
    Ventanas Emergentes
    Arreglar Primer nivel
    Validaciones de salida de juego
*/
