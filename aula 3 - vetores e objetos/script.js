// // vetores ou arrays
// let array1 = ["array1", 1, true];
// // console.log(array);

// // pode guardar vários tipos de dados
// let array2 = ["array2", 32, false, array1, ["array3", false, 3.2]];
// // console.log(array2);

// // manipulando arrays
// // .forEach() -> itera entre os elementos
// array2.forEach(function(item, indice){console.log(indice, item)});
// // .push() -> adiciona elementos no fim
// array2.push(["push", "final"]);
// console.log(array2);
// // .pop() -> Remove o ultimo item
// array2.pop();
// console.log(array2);
// // .shift() -> Remove o primeiro item
// array2.shift();
// console.log(array2);
// // .unshift() -> Adiciona elementos no inicio
// array2.unshift("unshift", 'inicio');
// console.log(array2);
// // .indexOf() -> retorna o índice de um valor
// console.log(array2.indexOf(32) + " e " + array2.indexOf(array1) );
// // .splice() -> remove ou substitui um item pelo indice
// array2.splice(0, 3);
// console.log(array2);
// // .slice() -> retorna uma parte de um array existente
// arrayNovo = [1, 3, 'array novo', false, 55.5];
// console.log(arrayNovo.slice(0, 3));

// Objetos

let object =  {
    string: 'string', 
    number: 1000, 
    booleano: true, 
    array: ['array interno'], 
    objetoInterno: {Interno: "objeto Interno", outroObjeto: {outroObj: "outro objeto"}}
};

console.log(object.string)
console.log(object.boolean)
console.log(object.objetoInterno.outroObjeto.outroObj)
// desestruturação
var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var {array} = object;
console.log(typeof(array));