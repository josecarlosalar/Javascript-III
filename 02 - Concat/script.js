// Apartado A

/*
Implementa una función `concat` (inmutable) tal que, dados 2 arrays como entrada, 
devuelva la concatenación de ambos. Utiliza rest / spread operators.
*/


const concat = (a, b) => [...a, ...b];
console.log("Apartado A, ", concat([1, 2, 3], [4, 5, 6]));


// Apartado B

/*
Implementa una versión del ejercicio anterior donde se acepten múltiples 
arrays de entrada (más de 2).
*/

const concatMulti = (...arrays) => arrays.reduce((acc, val) => [...acc, ...val]);
console.log("Apartado B, ", concatMulti([1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]));