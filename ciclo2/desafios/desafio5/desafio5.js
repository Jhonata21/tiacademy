window.onload=function(){

const botaoBuscar=document.querySelector(".btn");
const cxCep=document.querySelector("#cep");

const dadosCep = async function(cepURL){

var url= `https://viacep.com.br/ws/${cepURL}/json/` ;
var buscarCep = await fetch(url);
var dadosCep= await buscarCep.json();
console.log(dadosCep);

for (var campos in dadosCep){
	console.log(campos);
	if(document.querySelector("#"+campos)){
		document.querySelector("#"+ campos).value= dadosCep[campos];
	}
}


}

botaoBuscar.addEventListener('click', ()=>{

let cep = cxCep.value;
dadosCep(cep);

})





}