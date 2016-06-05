/**********************************************************
Boolean - Ele é um dos tipos mais simples masis claro esconde
alguns secredos.

Cuidado com os perigosos e confusões tipos "truthy" e "falsy",
eles são para ver estado dos tipos quando estão nos tipo de dados com 
boolean
***********************************************************/

/*Alguns valores que são falso, assim fazendo a negação duas 
vezes com "!!" iremos confirmar o valor*/

console.log(!!0); //false

console.log(!!NaN); //false

console.log(!!''); //false

console.log(!!false); //false

console.log(!!null); //false

console.log(!!undefined); //false


/**********************************************************

Vale lembra que Objeto e Array são "true"

***********************************************************/

var pessoa = {}
console.log(!!pessoa); //true

var nomes = []
console.log(!!nomes); //true



