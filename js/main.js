var secciones = [];
var tiempo_splash = 3000;
var id_intervalo;

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
    secciones[3].className = "juego";
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
