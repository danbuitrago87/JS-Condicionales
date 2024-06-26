
/*Verifica si un número ingresado por el usuario es positivo o negativo. 
Muestra una alerta informativa.*/

let num=prompt("Digita un número positivo o negativo");

if (num!=0){
    if (num>0)
        alert("El número es positivo");
    if (num<0)
        alert("El número es negativo");
}else{
    alert("El número es cero");
}