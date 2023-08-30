
// boolean

var VOuF = false;
console.log(typeof(VOuF));
console.log(VOuF);

// number

var numeroQualquer = 1;
console.log(numeroQualquer);

// string

var nome = "Satírio";
console.log(nome);

// function

var funcao = function() {}
console.log(typeof(funcao));

// como declarar

var variavel = "Satírio";
variavel = "Geisse";
console.log(variavel);

// let sao variaveis para o escopo local
let variavel2 = "Tomé";
variavel2 = "Souza";
console.log(variavel2);

// constantes devem ter seu valor declarado e nunca podem ser alterados
const constatante = 123;
console.log(constatante)

function  escopoLocal() {
    let escopoLocalInterno = "variável no escopo local";
    console.log(escopoLocalInterno);
}

escopoLocal();

// Atribuicao
var atribuicao = "Satirio";
// Comparacao
var comparacao = "0" == 0;
console.log(comparacao)
// Comparacao identica
var comparacaoIdentica = 0 === 0;
console.log(comparacaoIdentica);

// Operadores aritiméticos
var soma;
var subtracao;
var multiplicacao;
var divisaoReal;
var divisaoInteira;
var potenciacao
// Operadores relacionais
var maiorQue = 5 > 2;
var menorQue = 1 < 2;
var maiorIgual = 3 >= 3;
var menorIgual = 3 <= 3;

// Operadores logicos
var operadorAnd = true && false;
var operadorOr = true || false;
var operadorNot = !true;

