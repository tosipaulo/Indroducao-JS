/**********************************************************
Funções - Vale lembrar que a linguagem JS não tem:

- Classe
- Construtor
- Método
- Módulo

Mas por meio das funções podemos simular todos acima.
Função é um objeto que contém um bloco de código executável
***********************************************************/

/* Existem dois tipos de criar funções */

// Function Declaration
function soma (a, b) {
	return a + b;
}

console.log(soma); // [Function: soma]
console.log(soma(2 ,2)); // 4

// Function Expression
var soma = function(a, b) {
	return a + b;
}

console.log(soma); // [Function]
console.log(soma(2 ,2)); // 4


//Named Function Expression
var soma = function soma (a, b) {
	return a + b;
}

console.log(soma); // [Function: soma]
console.log(soma(2 ,2)); // 4


/*****************************************************************
Qual diferença entre a Declararion X Expression?
*****************************************************************/

/* Declararion ela é carregada antes do código ser interpretado */

console.log(soma(2 ,2)); // 4

function soma (a, b) {
	return a + b;
}

/* Expression ele é carregad durante a interpretação do código */

console.log(soma(2 ,2)); // ReferenceError: soma is not defined

var soma = function soma (a, b) {
	return a + b;
}

/******************************************************************
Existem 4 maneiras de invocar uma função!
******************************************************************/

/******************************************************************
1 - Diretamente pelo escopo global
********************************************************************/
soma(2,2);

// Parâmetro
var produto = {nome: "Sapato", preco:150};

var formulaImpostaA = function(preco) {return preco * 0.1;};

var calcularPreco = function(produto, formularImposto) {
	return produto.preco + formularImposto(produto.preco);
}

console.log(calcularPreco(produto, formulaImpostaA)); // 165


// Retornando uma funcão
var helloWorld = function(){
	return function(){
		return "Hello World!";
	}
}
console.log(helloWorld); // [Function]
console.log(helloWorld()); // [Function]
console.log(helloWorld()()); // Hello World!

/*******************************************************************
 2 - Invocando função por meio de um Objeto 
********************************************************************/
var pessoa = {
	nome: "Paulo Tosi",
	idade: 27,
	getIdade: function() {
		return this.idade;
	}
}

console.log(pessoa); // { nome: 'Paulo Tosi', idade: 20, getIdade: [Function] }
console.log(pessoa.getIdade); // [Function]
console.log(pessoa.getIdade()); // 27


var getIdade = function() {
	return this.idade;
}

var pessoa = {
	nome: "Paulo Tosi",
	idade: 27,
	getIdade: getIdade
}

console.log(getIdade()); // undefined
console.log(pessoa.getIdade()); // 27



/*******************************************************************
 3 - call e apply
********************************************************************/

var getIdade = function(extra) {
	console.log(arguments);
	return this.idade + extra;
}

var pessoa = {
	nome: "Paulo Tosi",
	idade: 27,
	getIdade: getIdade
}

// call - se estiver mais parametro apenas incluir separando por virgura 2,5,7
console.log(getIdade.call(pessoa, 2)); // 29

// apply - se estiver mais parametro apenas incluir dentro do array [2,5,7]
console.log(getIdade.apply(pessoa, [2])); //29


/*******************************************************************
 4 - operador new
********************************************************************/

// Funções Fábrica
var criarPessoa = function(nome, idade) {
	return {
		nome: nome,
		idade: idade
	};
}

console.log(criarPessoa("Paulo Tosi", 27)); //{ nome: 'Paulo Tosi', idade: 27 }


// Funções Construtora
var Pessoa = function(nome, idade) {
	this.nome = nome;
	this.idade = idade;
}

console.log(new Pessoa("Paulo Tosi", 27)); // { nome: 'Paulo Tosi', idade: 27 }

// Exemplo usando call e apply com função construtora
var paulo = {};
Pessoa.call(paulo, "Paulo Tosi", 27);
console.log(paulo); // { nome: 'Paulo Tosi', idade: 27 }

var gisely = {};
Pessoa.apply(gisely, ["Gisely", 29]);
console.log(gisely); // { nome: 'Gisely', idade: 29 }






