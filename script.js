//////////////////////////////////////////////////////// CON DISEÑO
/*EJERCICIOS*/

//1
function messageString() {
    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const edad = document.querySelector('#edad').value;
    document.querySelector('#solution1').textContent = dato1(nombre, apellido, edad);
}
const dato1 = (name, lastName, year) => `Hola mi nombre es ${name} ${lastName} y mi edad ${year}`;

//2
function sumCube() {
    const numeros = document.querySelector('#numeros').value;
    const arr = numeros.split(',');
    document.querySelector('#solution2').textContent = calcularArr(arr);
}

function calcularArr(data) {
    let sum = 0;
    data.forEach(dat => {
        sum += Math.pow(dat, 3);
    })
    return sum;
}


//////////////////////////////////////////////////////// SIN DISEÑO 

//3 --falta
function typeValor(valor) {
    console.log(`EJERCICIO 3 --- ${typeof valor}`);
}
typeValor('mama');

//4
function sumar(...parametros) {
    return parametros.reduce((total, numero) => total + numero, 0);
}
console.log(`EJERCICIO 4 ---${sumar(1, 2, 3, 4)}`);

//5 --Crear una función que reciba un array de valores y filtre los valores que no son string

const dato = [1, 2, 3, 'jose', true];
const filtrar = dato.filter(valor => typeof valor !== 'string');

console.log(`EJERCICIO 5 --- ${filtrar}`);


//6 Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
function minmax(matriz) {
    let max = Math.max(...matriz);
    let min = Math.min(...matriz);
    console.log(`EJERCICIO 6 --- ${max} - ${min}`);
}
minmax([1, 2, 3, 12]);


//7 --- Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.
function formatPhoneNumber(numbers) {
    const numberPhone = numbers.join('');
    let dat = `(${numberPhone.substring(0, 3)}) ${numberPhone.substring(3, 6)}-${numberPhone.substring(6)}`;
    console.log(`EJERCICIO 7 --- ${dat}`);
}

formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

//8 -- Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.
function findLargestNums(arr) {
    let total = [];
    arr.forEach(dato => {
        let max = Math.max(...dato);
        return total = [...total, max];
    });
    console.log(total);
}
findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]);

//9 Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
function charIndex(word, char) {
    let find = [];
    const newWord = word.split('');
    for (let i = 0; i < newWord.length; i++) {
        if (newWord[i] === char) {
            find = [...find, i]
        }
    }
    if (find.length > 2) {
        find = [find[0], find[find.length - 1]];
    }
    console.log(find);
}
charIndex("hello", "l");


//10 -- Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.
function toArray(objArr) {
    console.log(Object.entries(objArr));
}
toArray({ a: 1, b: 2 })


//11 -- Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.
function getBudgets(obj) {
    let total = 0;
    obj.forEach(dato => {
        total += dato.budget;
    })
    console.log(total);
}
getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
])


//12 -- Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
function getStudentNames(oobjNames) {
    let students = [];
    oobjNames.forEach(student => {
        students = [...students, student.name];
    });
    console.log(students);
}
getStudentNames([
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" }
])


//13 -- Escriba una función que convierta un objeto en una matriz de claves y valores.
function objectToArray(objMatriz) {
    let result = Object.entries(objMatriz);
    console.log(result);
}

objectToArray({
    likes: 2,
    dislikes: 3,
    followers: 10
})


//14 --- Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.
function squaresSum(num) {
    let suma = 0;
    for (let i = 1; i <= num; i++) {
        suma += Math.pow(i, 2);
    }
    console.log(suma);
}
squaresSum(3)

//15 -- Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada
function multiplyByLength(matr) {
    let total = matr.length;
    let newMatr = [];
    matr.forEach(dato => {
        newMatr = [...newMatr, dato * total]
    });
    console.log(newMatr);
}
multiplyByLength([2, 3, 1, 0])

//16 --- Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.
function countdown(n) {
    let total = [];
    for (let i = n; i >= 0; i--) {
        total = [...total, i];
    }
    console.log(total);
}
countdown(5);

//17 -- Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.
function diffMaxMin(maxminMatr) {
    let max = Math.max(...maxminMatr);
    let min = Math.min(...maxminMatr);
    let dato = Math.abs(max - min);
    console.log(dato);
}
diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]);

//18 -- Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.
function filterList(filterInt) {
    let total = [];
    filterInt.forEach(int => {
        if (typeof int === 'number') {
            total = [...total, int];
        }
    });
    console.log(total);
}
filterList([1, 2, 3, "x", "y", 10])

//19 Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.
function repeat(elemento, tiempo) {
    let total = [];
    for (let i = 0; i < tiempo; i++) {
        total = [...total, elemento];
    }
    console.log(total);
}
repeat(13, 5)

//20 Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada.
function vreplace(replaceLetter) {

    let dato = replaceLetter.replaceAll('a', 'u');
    console.log(dato);
}

vreplace("apples and bananas");

//21 -- Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
function findNemo(palabra) {
    let find = '';
    let newPalabra = palabra.split(' ');
    newPalabra.forEach((letter, index) => {
        if (letter === 'Nemo') {
            find = `I found Nemo at ${index + 1} !`;
        }
    })
    console.log(find);
}
findNemo("Nemo I am finding !");


//22 Cree una función que capitalice la última letra de cada palabra.
function capLast(capitaliceLastLetter) {

const dato = capitaliceLastLetter.charAt(capitaliceLastLetter.length - 1).toUpperCase();
console.log(capitaliceLastLetter.slice(0, capitaliceLastLetter.length - 1) + dato);

}

capLast("habia") 

