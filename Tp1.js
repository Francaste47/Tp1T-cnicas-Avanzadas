
function doble_mismo(num){
    return num * 2;
}

const doble_mismo = function(num){
    return num * 2;
}

//console.log(doble_mismo(3));
//console.log(doble_mismo(101));
//console.log(doble_mismo(113));
______________________________________________________________________________________________



function es_par(un_numero){
 return un_numero % 2 == 0
}

var cal = function(un_numero){
 return un_numero % 2 == 0
}




function aplicar(una_funcion){
 return una_funcion();
}

______________________________________________________________________________________________



const sumar = function(un_numerito, otro_numerito){
  return un_numerito + otro_numerito
  }
  const multiplicar = function(un_numerito, otro_numerito){
  return un_numerito * otro_numerito
  }
  const restar = function(un_numerito, otro_numerito){
  return un_numerito - otro_numerito
  }
  const dividir = function(un_numerito, otro_numerito){
  return un_numerito / otro_numerito
  }


  function calculadora (una_op_aritmetica, un_numero, otro_numero){
    console.log(una_op_aritmetica(un_numero, otro_numero));
  }
  

  const calculadora = function(una_op_aritmetica, un_numero, otro_numero){
    console.log(una_op_aritmetica(un_numero, otro_numero));
  }



calculadora(sumar, 40, 2);       //Devuelve 42
calculadora(multiplicar, 40, 2); //Devuelve 80
calculadora(restar, 40, 2);      //Devuelve 38
calculadora(dividir, 40, 2);     //Devuelve 20
______________________________________________________________________________________________



function deci_hola() {
  return 'hola';
}

function deci_adios() {
  return 'adios';
}

function saludar(saludo, nombre){
  console.log(saludo() +' '+ nombre)
}

saludar(deci_hola, 'pepe');    //Devuelve hola pepe
saludar(deci_adios, 'pepe');    //Devuelve adios pepe

saludar(deci_hola, 'Gisela'); //Devuelve hola Gisela
saludar(deci_adios, 'Gisela'); //Devuelve adios Gisela

______________________________________________________________________________________________



const deci_hola = function() {
return function() {
console.log('¡Hola!');
}
}
const deci_chau = function(){
return 'Chau';
}

console.log(deci_hola);         
// Devuelve la funcion que retorna otra funcion mostrando lo siguiente: window.runnerWindow.proxyConsole.log('¡Hola!');                                                                                                               

console.log(deci_hola());               
// Devuelve una funcion que muestra lo siguiente: window.runnerWindow.proxyConsole.log('¡Hola!');

console.log(deci_hola()());             
// Devuelve el string de la variable que guarda la funcion deci_hola mostrando: '¡Hola!'.



console.log(deci_chau);               
// Devuelve la funcion que retorna el string deci_chau.

console.log(deci_chau());             
// Devuelve el string que retorna de la funcion deci_chau mostrando: "Chau".

console.log(deci_chau()());           
// Devuelve tipo error porque deci_chau()() no es una funcion.



______________________________________________________________________________________________



function enviar_mensaje(un_mensaje, una_funcion_que_muestra){
  return una_funcion_que_muestra(un_mensaje);
}


enviar_mensaje("¿Quién es?", console.log);  
//devuelve por consola el string "¿Quién es?",

enviar_mensaje("Soy yo", alert);         
//devuelve una pagina insertada como alerta que dice "soy yo",

enviar_mensaje("¿Qué vienes a buscar?", prompt);
//devuelve una pagina insertada como buscador que dice "¿Qué vienes a buscar?"

enviar_mensaje("A tí", confirm); 
//devuelve una pagina insertada que dice "A ti" y poder elegir confirmar o cancelar.


//   Porque la funcion mensaje string lo envia por el metodo de consola.
//   Porque el mensaje string es llamado como alerta.
//   Porque el mensaje tiene la funcion de busqueda inmediata.
//   Porque el mensaje asignado tiene la accion de poder confirmar el mensaje.

______________________________________________________________________________________________



function identidad(una_cosa){
  return una_cosa;

}

const identidad = function(una_cosa){
  return una_cosa;

}
______________________________________________________________________________________________


function por_dos(un_numero){
  return un_numero * 2
}

console.log(por_dos(21)); // Devuelve el resultado del numero asignado multiplicado por dos, en este caso es 42

const doble = por_dos
doble(2)                   // Guarda la funcion "por_dos" en una variable llamado "doble" tendiendo la misma accion, devolviendo el resultado del numero asignado en este caso 4.

______________________________________________________________________________________________



function sucesor(un_numero){
    return un_numero + 1;   
}

console.log(sucesor(10)); //devuelve 11.
console.log(sucesor(14064)); //devuelve 14065.

______________________________________________________________________________________________



function saludo_viteh(){
alert('Hola, viteh');
}
const saludo_viteh = function(){
alert('Hola, viteh');
}

//A). Si, La funcion es lo mismo mandar una pagina de alerta insertado un string llamado 'Hola, viteh', con
//    la unica diferencia es una guardada en una variable para no repetir el trabajo dos veces.


//B). Si, Su funcionamiento es guardar y/o llamar a una funcion existente para usarlo nuevamente como tambien tenerlo organizado.

const estoy_saludando = saludo_viteh;
estoy_saludando();