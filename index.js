let alturaT=10;
let baseT=5;
document.write();

function calculoTriangulo (base, alt) {
    return base * alt / 2
}

 let triang = calculoTriangulo(6,10)


console.log(triang);
function calculoRectangulo (base, alt){
return base*alt
}
let Rect=calculoRectangulo(50,10)
console.log(Rect)

let audi=["rs","r8","rs7"]

function largoDelArray(param){
    return param.length
}
console.log(largoDelArray(audi));
console.log(largoDelArray([5,6,9,87]));
function cantidadDeletras(palabra){
return palabra.length
}
console.log(cantidadDeletras("mondongo"));
function dolarHoy(precio){
    return precio/1000
}
let dolar=dolarHoy(10);
console.log(dolar)
function precioFinal(precio){
    return (precio*0.21)+precio
}

console.log(precioFinal(60));
function mitad(numero){
return numero/2;
}
let cuenta =mitad(6);
console.log(cuenta);
let fechas= ["lun","mar","mier","juev","viern"];
function diasegunnumero(fechas){
return fechas
}
// aca se sumar dos números
function sumar(num1, num2) {
    return num1 + num2;
  }
  
  // aca se multiplican dos números
  function multiplicar(num1, num2) {
    return num1 * num2;
  }
  
  // Función para restar dos números
  function restar(num1, num2) {
    return num1 - num2;
  }
  
  // Función para dividir dos números
  function dividir(num1, num2) {
    if (num2 === 0) {
      return "Error: No se puede dividir por cero.";
    } else {
      return num1 / num2;
    }
  }
  
  // Función principal para la calculadora
  function calculadora(num1, num2, operacion) {
    switch (operacion) {
      case "+":
        return sumar(num1, num2);
      case "-":
        return restar(num1, num2);
      case "*":
        return multiplicar(num1, num2);
      case "/":
        return dividir(num1, num2);
      default:
        return "Operación no válida.";
    }
  }
  
  // Prueba de la calculadora
  let numero1 = 10;
  let numero2 = 5;
  let operacion = "+";
  
  console.log("Resultado:", calculadora(numero1, numero2, operacion));
  






console.log(diasegunnumero(fechas[2]));
let alumno={
    nombre: 'Santiago',
    apellido: 'Del Castillo',
    dni: '45753787',
    edad:19,
    comidas:["milanesa","pizza","fideos"],
    saludar: function() {
      return "Hola mi nombre es " + this.nombre + " " + this.apellido + " y tengo " + this.edad + " años. Mi primer comida favorita es " + this.comidas[0];
    }
  };
  
  // Imprimir la frase resultante en la consola
  console.log(alumno.saludar());
  
  let auto = {
    marca: "Honda",
    modelo: "Civic",
    anio: 2017,
    color: "Negro",
    posicion: 0,
    avanzar: function(n) {
      if (n > 0) {
        this.posicion += n;
      }
    },
    retroceder: function(n) {
      if (n > 0) {
        this.posicion -= n;
      }
    }
  };
  
  // Moviendo el auto usando los métodos avanzar(n) y retroceder(n)
  auto.avanzar(5);
  auto.retroceder(2);
  auto.avanzar(3);
  
  // Imprimiendo la posición final del auto
  console.log("La posición final del auto es: " + auto.posicion);
  let nuevoAuto = {
    marca: "Honda",
    modelo: "Civic",
    anio: 2017,
    color: "Negro",
    posicion: 0,
    moverse: function(n) {
      if (n > 0) {
        this.posicion += n;
      } else if (n < 0) {
        this.posicion -= Math.abs(n);
      }
    }
  };
  
  // Moviendo el auto usando el método moverse(n)
  nuevoAuto.moverse(5);
  nuevoAuto.moverse(-2);
  nuevoAuto.moverse(3);
  
  // Mostrando la posición final del auto por consola
  console.log("La posición final del auto es: " + nuevoAuto.posicion);
  
// Objeto literal Iron Man
let ironMan = {
    nombre: "Iron Man",
    equipo: "Avengers",
    poderes: ["Volar", "Lanzar misiles", "Disparar láser"],
    energia: 100,
    getPoder: function(num) {
      if (num >= 0 && num < this.poderes.length) {
        this.energia -= 10;
        return "Poder Elegido de " + this.nombre + ": " + this.poderes[num] + ". Energía restante: " + this.energia + ".";
      } else {
        return "Número de poder inválido.";
      }
    }
  };
  
  // Objeto literal Hulk
  let hulk = {
    nombre: "Hulk",
    equipo: "Avengers",
    poderes: ["Aplastar", "Gritar", "Golpear"],
    energia: 100,
    getPoder: function(num) {
      if (num >= 0 && num < this.poderes.length) {
        this.energia -= 10;
        return "Poder Elegido de " + this.nombre + ": " + this.poderes[num] + ". Energía restante: " + this.energia + ".";
      } else {
        return "Número de poder inválido.";
      }
    }
  };
  
  // Función para generar un número entero aleatorio entre 0 y max (exclusivo)
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  // Realizando la batalla
  for (let i = 0; i < 5; i++) { // Ejecutar 5 veces
    let numRandom = getRandomInt(3); // Generar número aleatorio entre 0 y 2
    console.log(ironMan.getPoder(numRandom)); // Ejecutar el método getPoder de Iron Man con el número aleatorio
    console.log(hulk.getPoder(numRandom)); // Ejecutar el método getPoder de Hulk con el número aleatorio
  }
  















for (let i = 0; i < 5; i++) {
    console.log("practicando con el bucle for");
    document.write("practicando con el bucle for");
}
for (let i = 0; i < 10; i++) {
    console.log("La variable i tiene el valorDei");
    document.write("La variable i tiene el valorDei");
}
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
    document.write(i);
}
for (let i = 5; i <= 250; i += 5) {
    console.log(i);
    document.write(i);
}
for (let i = 100; i >= 0; i--) {
    console.log(i);
    document.write(i);
}
let base = 5; // Variable que contiene el número base
let resultados = []; // Array vacío para almacenar los resultados

for (let i = 1; i <= 10; i++) {
    resultados.push(base * i); // Multiplica el número base por el índice actual y lo añade al array de resultados
}

console.log(resultados); // Imprime el array de resultados por consola
document.write(resultados);


let base2 = 3;
let resultados2 = [];

for (let i = 1; i <= 10; i++) {
    resultados2.push(base2 * i);
}

console.log(resultados2);


let base3 = 7;
let resultados3 = [];

for (let i = 1; i <= 10; i++) {
    resultados3.push(base3 * i);
}

console.log(resultados3);

let ganancias = [100,500, 200, -75, 150, -25, 300, -100, 250, -50]; // Array con 10 números positivos o negativos
let suma = 0; // Variable para almacenar la suma de los números

for (let i = 0; i < ganancias.length; i++) {
    suma += ganancias[i]; // Suma cada número del array a la variable 'suma'
}

console.log("La suma total de las ganancias es:", suma); // Imprime la suma total por consola


let healingIsDifficult = [
    'Fear',
    'Drink to Get Drunk',
    'Taken for Granted',
    'Blow It All Away',
    'Get Me',
    'Im Not Important to You',
    'Sober and Unkissed',
    'Healing Is Difficult',
    'Judge Me',
    'Little Man',
    'Insidiously'
  ];
  
  // Iterar sobre el array e imprimir cada elemento
  for (let i = 0; i < healingIsDifficult.length; i++) {
    console.log(healingIsDifficult[i]);
  }
  
  let got = [
    {
      nombre: "Jon",
      apellido: "Snow",
      edad: 23,
      ciudad: "Winterfell"
    },
    {
      nombre: "Daenerys",
      apellido: "Targaryen",
      edad: 19
    },
    {
      nombre: "Arya",
      apellido: "Stark",
      edad: 12,
      ciudad: "Winterfell"
    },
    {
      nombre: "Tyrion",
      apellido: "Lannister",
      edad: 32,
      ciudad: "Casterly Rock"
    }
  ];
  
  // Iterar sobre el array de personas
  for (let i = 0; i < got.length; i++) {
    // Imprimir la primera frase
    console.log("Hola " + got[i].nombre + " " + got[i].apellido + " criatura viajera!");
    
    // Verificar si la ciudad está definida para imprimir la segunda frase
    if (got[i].ciudad) {
      console.log("Soy " + got[i].nombre + " " + got[i].apellido + " de la ciudad " + got[i].ciudad);
    }
  }
  
