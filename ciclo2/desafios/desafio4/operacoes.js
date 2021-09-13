window.onload=function (){
//produtos
alert('OLA');

}
/*
(()=>{
	let mostrarProdutosCLiente = document.querySelector("#content-produtos > ul#produtos");

for (let idx in produtos){

 mostrarProdutosCLiente.innerHTML += `<li class='itemProduto' data-preco=${produtos[idx].prodPreco}> ${produtos[idx].prodDesc}</li>`};

})



const itemProduto = document.querySelectorAll("#produtos > li.itemProduto");

const cestaDoCliente = document.querySelector("ul#cestaDoCliente");

const mostraTotalCompra = document.querySelectorAll("#mostraTotalCompra");
const armazenaIten = [];
var totalPedido=0;


itemProduto.forEach((item)=>{
	item.addEventListener('click'()=>{

		
		

		if (armazenaIten.indexOf(item.textContent) == -1){
			
			li = document.createElement("li");
			li.setAttribute("class", "itemProduto");
            li.setAttribute("data-preco", item.dataset.preco);


			armazenaIten.push(item.textcontent);
			cestaDoCliente.appendChild(li).textContent = item.textContent;
			totalPedido += Number(item.dataset.preco);
			mostraTotalCompra.value = totalPedido.toLocaleSting('pt-BR',
			{style:'currency', currency:'BRL'})

		}else{
			alert(`Este item ${item.textcontent} já está na sua cesta!`);
		}

	})
})
const cestaCliente1 = document.querySelectorAll("#cestaDoCliente");
    const list = document.querySelector("ul#cestaDoCliente");

    cestaCliente1.forEach((item) => {

        item.addEventListener('click', (itemCesta) => {

            var idx = armazenaItens.indexOf(itemCesta.target.textContent);
            if (idx > -1) {

                totalPedido -= Number(itemCesta.target.dataset.preco);

                cestaCliente.removeChild(list.childNodes[idx]);
                armazenaItens.splice(idx, 1);
                mostraTotalCompta.value = totalPedido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            }
        })
    })

}
