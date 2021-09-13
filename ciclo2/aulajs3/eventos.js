





window.onload = function() {

//alert("alerta"); 
const btn1 = document.querySelector(".btn-click");
const legP = document.querySelector(".legenda");
const cxTexto = document.querySelector("#texto");

btn1.addEventListener('click', ()=>{
		
		//escrever no elemento
		legP.innerHTML += cxTexto.value;


} );

legP.addEventListener('click', ()=>{

	legP.innerHTML = '';

})

legP.addEventListener('mouseout', ()=>{

alert("Teste");

/* TRocar tipo do elemento*/

const trocaSenha = document.querySelector("#verSenha");
const cxSenha = document.querySelector("Senha")
trocaSenha.addEventListener('click', ()=>{
		//getAttribute()
		//setAttribute()
		if(cxSenha.getAttribute('type')=='password'){
		   (cxSenha.getAttribute('type')=='password')	
		}else{
			cxSenha.getAttribute('type')=='password')

})

//alterar background 

const cxTrocaBg = document.querySelector("#cxTbg");
cxTrocaBg.addEventListener('blur',()=>{
cxTrocaBg.setAttribute('class','corBg');

})
//somar valores cx input text

const valor1 = document.querySelector("#v1");
const valor2 = document.querySelector("#v2");
const btnSomar = document.querySelector("#soma");
const spResultado = document.querySelector("#resultado");

	btnSonar.addEventListener('click', ()=>{
		var cx1 = valor1.value;
		var cx2 = valor2.value;
		var r = Number(cx1) + Number(cx2);

		spResultado.innerHTML = r;
	})


	//evento modal
	const btnModal = document.querySelector("#chamarModal");
	const janelaM = document.querySelector("#janModal");
	const closeMod = document.querySelector("#fechaModal");
	brnModal.addEventListener('click', ()=>{
		
		janelaM.setAttribute('class', 'modals');

	});
	janelaM.addEventListener('click',()=>{

		janelaM.classList.remove('modal');
	})


