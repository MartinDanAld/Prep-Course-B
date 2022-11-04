// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    var suma=0;
    for (var i=1; i<11; i++){
      suma = suma + i;   // suma += i
    }
    return suma
    /* CON UN WHILE
    let suma = 0
    let i = 1
    while(i<11){
      suma += i
      i++
    }
    return suma
    */ 
    /* CON UN FOR OF
    let suma = 0
    const numeros = [1,2,3,4,5,6,7,8,9,10];
    for(const e of numeros) suma += e
    return suma
    */
    /* CON UN FOR EACH
    let suma = 0
    const numeros = [1,2,3,4,5,6,7,8,9,10];
    numeros.forEach((e) => (suma +=e));
    return suma
    */
    /* CON MAP
    let suma = 0
    const numeros = [1,2,3,4,5,6,7,8,9,10];
    numeros.map( (e) => suma += e )
    return suma
    */
    /* CON MAP
    let suma = 0
    const numeros = [1,2,3,4,5,6,7,8,9,10];
    numeros.map( (e) => suma += e )
    return suma
    */
    /*

    */
}
/*function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  const arrPar = []
  for (var i=0; i<array.length ; i++){
    if(array[i]%2 == 0){
      arrPar.push(array[i])
    }
  }
  return arrPar
}*/
function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  return array.filter((e) => e%2==0)
}

/*function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  const arrCuadrardos=[]
  for(i=0; i<array.length; i++){
    arrCuadrardos.push(array[i]**2)
  }
  return arrCuadrardos
}*/
function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  return array.map((e)=>e**2)
}

/*function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  var suma=0
  for(i=0; i<array.length; i++){
    suma=suma+array[i]
  }
  return suma
}*/
function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  return array.reduce((prev,next)=> prev + next, 0);
}

/*function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  cont = 0
  while(num>=1){
    cont++
    num = num/10
  }
  return cont
  //return num.toString().length
}*/
function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  return num.toString().length
}

/*
function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    var suma=0;
    for (var i=1; i<11; i++){
      suma = suma + i;
    }
    return suma
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  const arrPar = []
  for (var i=0; i<array.length ; i++){
    if(array[i]%2 == 0){
      arrPar.push(array[i])
    }
  }
  return arrPar
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  const arrCuadrardos=[]
  for(i=0; i<array.length; i++){
    arrCuadrardos.push(array[i]**2)
  }
  return arrCuadrardos
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  var suma=0
  for(i=0; i<array.length; i++){
    suma=suma+array[i]
  }
  return suma
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  cont = 0
  while(num>=1){
    cont++
    num = num/10
  }
  return cont
}*/
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
