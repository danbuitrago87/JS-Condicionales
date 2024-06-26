/*Crea un mensaje que informe al usuario sobre el saldo de su cuenta, 
utilizando un template string para incluir el valor del saldo. 
Pide al usuario que ingrese su nombre mediante un prompt. Luego,
muestra una alerta de bienvenida usando ese nombre.*/
alert("BIENVENIDO");
let nombre=prompt("Digite su nombre: ");
alert(`BIENVENIDO A SU BANCO AMIGO ${nombre}`)
let saldo=prompt("Digite su saldo: ");
alert(`Su saldo es: ${saldo}`);