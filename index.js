//Ejercicio 1
console.log("holaa");

//EJERCICIO 2

const numeros = [1, 2, 3, 4];
console.log(numeros); 

const sumar = (a, b) => {
    return a + b;
}

console.log(sumar(2, 3)); 

//EJERCICIO 3

const agregarNum = (array, valor) => array.push(valor);

agregarNum(numeros, 5);
console.log(numeros); 

//EJERCICIO 4


const ultimaPosicion = numeros.lastIndexOf(3);

console.log("Última posición del número 3:", ultimaPosicion);


//EJERCICIO 5

console.log(numeros.reduce((accumulator, currentValue) => accumulator + currentValue, 0,))

//EJERCICIO 6

const reversa = numeros.reverse();
console.log(reversa);

//EJERCICIO 7

numeros.sort();
console.log(numeros);

//EJERCICIO 8

const mayores = numeros.filter((numeros) => numeros > 3);
console.log(mayores);

//EJERCICIO 9


const duplicados = numeros.filter((numeros) => numeros.Count);
console.log(duplicados);