var secciones = [];
var preguntas = [];
var tiempo_splash = 3000;
var id_intervalo;
var score = 1;

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
    preguntas[1] = document.getElementById("primera_pregunta")
    preguntas[2] = document.getElementById("segunda_pregunta")
    preguntas[3] = document.getElementById("tercera_pregunta")
    preguntas[4] = document.getElementById("cuarta_pregunta")
    s = document.getElementById("segundos");
    m = document.getElementById("minutos");
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
    secciones[3].className = "juego";
    preguntas[1].className = "pregunta_uno";
    contador_s=0;
    contador_m=0;
    
    activarTiempo();
}

function activarTiempo(){
    if(id_intervalo){
        clearInterval(id_intervalo);
    }
    id_intervalo = setInterval(tiempo,1000);
}

function tiempo(){
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

function respuestaIncorrecta(id_seccion){
    alert("Tu repuesta ha sido incorrecta")
    for (var i in secciones) {
        secciones[i].classList.add("oculto");
    }
    secciones[id_seccion].classList.remove("oculto");

}

function respuestaCorrecta(id_pregunta){
    /*if((id_pregunta == 5))
    {
        alert("Felicidades!!!. Has completado el juego con exito")
        secciones[2].classList.remove("oculto");
    }else{
        alert("Felicidades!!!. Tu repuesta es correcta")
        for (var i in preguntas) {
            preguntas[i].classList.add("oculto");
        }
    }
    preguntas[id_pregunta].classList.remove("oculto");
    document.getElementById("puntaje").innerHTML = score;
    document.getElementById("puntaje").innerHTML = score++ + "0  PUNTOS";*/
    for (var i in preguntas) {
        preguntas[i].classList.add("oculto");
    }
    preguntas[id_pregunta].classList.remove("oculto");
    document.getElementById("puntaje").innerHTML = score;
    document.getElementById("puntaje").innerHTML = score++ + "0  PUNTOS";
    
}


/* Pendientes
    Pausa
    Ventanas Emergentes
    Arreglar Primer nivel
    Validaciones de salida de juego
*/