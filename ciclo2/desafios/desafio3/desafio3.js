window.onload = function() {


const valor1 = document.querySelector("#valor1");
const valor2 = document.querySelector("#valor2");
const infResultado = document.querySelector("#resultado");
const confResultado = document.querySelector("#botao");

	confResultado.addEventListener('click',()=>{

		var cx1 = valor1.value;
		var cx2 = valor2.value;
		var cx3 = Number(infResultado.value);
		var soma = Number(cx1) + Number(cx2);

		if (soma==cx3){
			alert('O resultado informado está correto !');
		}else{
			alert('O resultado informado está incorreto!');
		}



})

}
