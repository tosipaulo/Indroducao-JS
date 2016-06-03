/**********************************************************
Number - Em JavaScript não existe distinção como em outra 
linguagem, como um número inteiro, ponto flutuante entre 
outros.
***********************************************************/

//Atribuindo o valor 10 para a variavel "nota"
var nota = 10;

//Atribuindo o valor decimal para a variavel "nota"
var nota = 10.2;

//Verificando o tipo de variavel nota
console.log(typeof nota); //number

/**********************************************************
Existe algumas api em JavaScript para trabalhar com number
***********************************************************/

//Colocando duas casas depois da virgula.
console.log(nota.toFixed(2)); //10.20

/**********************************************************
Existe algumas Math api em JavaScript para fazer calculos

abs - Valor absoluto do número
floor - Valor inteiro do número
log - Logarítmo natural do número (base E)
min - Retorna o menor número
max - Retorna o maior número
pow - Potência do número
random - Gera um número randômico
round - Arredonda o número para o inteiro mais próximo
sin - Seno do número
sqrt - Raíz quadrada do número
tan - Tangente do número

***********************************************************/

console.log(Math.sin(nota)); //-0.6998746875935423
console.log(Math.tan(nota)); //0.979852083895097
