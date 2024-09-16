//Solucion utilizando Set
function removerDuplicados(arr) {
    return [...new Set(arr)];
}

// Ejemplo de uso
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = removerDuplicados(numbers);
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]

//Solucion usando filter y indexOf
function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

// Ejemplo de uso
const num = [1, 2, 2, 3, 4, 4, 5];
const uniqueNum = removeDuplicates(num);
console.log(uniqueNum); // [1, 2, 3, 4, 5]

