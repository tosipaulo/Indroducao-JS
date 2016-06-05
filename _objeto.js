/**********************************************************
Objeto - Uma coleção dinâmica de chave e valores de qualquer
tipo de dados. É possivel adicionar e remover propriedade a
qualquer momento.
***********************************************************/

//Criando um objeto vazio
var pessoa = {};
console.log(typeof pessoa); //object

//Adicionando propriedade ao objeto
var pessoa = {
	nome: "Paulo Tosi",
	idade: 27
};
console.log(pessoa); //{ nome: 'Paulo Tosi', idade: 27 }

//Apagando propriedade do Objeto
delete pessoa.idade;
console.log(pessoa); //{ nome: 'Paulo Tosi'}





/**********************************************************

Vale lembra que Objeto e Array são "true"

***********************************************************/




