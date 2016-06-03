/**********************************************************
String - Composta por uma sequência de 0 ou mais caracteres
com as seguintes características:

- São imutávais
- Podem ser declaradas com aspas simples ou duplas
***********************************************************/

//Atribuindo o valor string para a variavel "nome"
var nome = "Paulo";

//Verificando o tipo de variavel nome
console.log(typeof nome); //String


/**********************************************************
Existe algumas Math api em JavaScript para fazer calculos

charAt - Retorna o char da posição
charCodeAt - Retorna o código do char da posição
concat - Concatena duas Strings
indexOf - Retorna o índice da primeira ocorrência do char
lastIndexOf - Retorna o índice da ultima ocorrência do char
length - Retorna o tamanho da String
match - Retorna uma array resultante da busca com RegExp
replace - Substitui parte da String por outra
search - Retorna a posição da String ou RegExp
split - Divide a String com a base na expressão regular informada
substring - Extrai a parte da String desejada
toLowerCase - Gera uma nova String em letra minúscula
toUpperCase - Gera uma nova String em letra maiúscula
trim - Remove os espaços em branco do inicio e do fim da String
valueOf - Retorna o valor primitivo da String

***********************************************************/

console.log(nome.charAt(2)); //u

console.log(nome.charCodeAt(0)); //80 seria o P

nome = nome.concat(" Tosi")
console.log(nome); //Paulo Tosi

console.log(nome.indexOf("P")); //0
console.log(nome.indexOf("T")); //6

console.log(nome.match("Tosi")); //[ 'Tosi', index: 6, input: 'Paulo Tosi' ]

console.log(nome.replace("Tosi", "Santos")); //Paulo Santos

nomes = "Paulo,Maria,João,Gisely";
console.log(nomes.split(",")); //[ 'Paulo', 'Maria', 'João', 'Gisely' ]

console.log(nome.substring(0,5));//Paulo *lembrando que é posição inicial e final

nome = " Paulo Tosi ";
console.log(nome.trim()); //Paulo Tosi *remove os espaço no final e inicio

