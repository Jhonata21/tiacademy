/*var nome = "Marcelo";
console.log(nome.lenght)
console.log(nome[0]);//

//match()

var palavras ="Maça doce";

//console.log( palavras.match(/D/gi));

var str= "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium ea explicabo maiores, culpa delectus nisi accusamus eum omnis autem quos quibusdam laboriosam ratione 
amet. Ratione deserunt quas provident, facilis culpa.";

var mudarStr = str.replace(/e/gi,'x');*/


//localeCompare()

/*var compl="Comparar";
var comp2="comparar";

var c1 = comp1.toLowerCase();
var c1 = comp1.toLowerCase();

//console.log(`Este é o c1 ${c1} Este é o c2 ${c2}`);


var comparacao = compl.localeCompare(/comp2/);
console.log(comparacao);*/

/*trim()
Faz a remoção de espaços antes e depois da string especificada.string*/

var p = ' fpalavra+ ';

var r = p.trim();
console.log(r)

var s = r.replace(/f/gi,''));
console.log(s);
var sub a = s.replace(/a+/gi,'a')
//console.log(p.trim('+'))
console.log(`Removido: ${sub_a}`);

//toLocaleString
var valor = 1.35 // 1,35; 
var formatarMoeda = valor.toLocaleString('pt-BR',{
	style:'currency',
	currency:'BRL'
})

console.log(formatarMoeda)