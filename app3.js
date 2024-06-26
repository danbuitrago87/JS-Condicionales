/*Crea un sistema de puntuación para un juego. 
Si la puntuación es mayor o igual a 100, muestra 
"¡Felicidades, has ganado!". 
En caso contrario, muestra "Intentalo nuevamente para ganar.".*/ 

let puntos=prompt("DIGITA TU PUNTUACIÓN: ");

if (puntos>=100){
    alert("FELICIDADES");
}else{
    alert("INTENTA DE NUEVO");
}