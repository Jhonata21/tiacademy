var v1=1;
var v2=1;
if (v1==v2) {
	console.log("Sim é verdade");
} else {
	console.log("Isto é falso");
}


var v3= '1';
var v4=1;
if (v3 === v4){
	console.log("v3 é exatamente igual a v4");
} else {
	console.log("v3 não é  igual a v4");
	console.log(v4);
}

var v3= '1';
var v4=1;
if (v3 === v4){
	console.log("v3 é exatamente igual a v4");
	console.log(typeof(v4));

} else {
	console.log("v3 não é  igual a v4");
	console.log(typeof(v3));
}

var v5=1;
var v6=prompt("Digite um valor");


if (v5!= v6){
	console.log("v5 é diferente de v6");

}else{
	console.log("São iguais");
}

var v7=1;
var v8=1;
if(v7!==v8){
	console.log("Examente diferente");
}else {
	console.log("São iguais")
}

var va=200;
var vb=400;
if (va < vb){
	console.log("Sim va é menor que vb");
}

var va=1;
var vb=1;
if(va > vb){
	console.log("Sim va é maior que vb");
}

var vc=400;
var vd=399;
if(vc<=vd) {
	console.log("vc="+vc+"vc é menor ou igual a vd="+vd);	

}

var ve=400;
var vf=200;
if (ve >= vf){
	console.log("ve="+ve+" é maior ou igual a vf="+vf);
}

var a=0;
var b=1;
if (a=0 && b=0) {
	console.log ("Verdadeiro");
} else{
	console.log("falso");
}
var c=0;
var d=1;
if (c==0 || d==1) {
	console.log("ok");
} else{
	console.log ("!ok")
}
var s = 1;

if(! typeof(s)){
	console.log("Não é uma string");
}else {
	console.log("é uma string");
	console.log(typeof(s));
}

var op;
switch(op) {
	case 1:
	alert("Estou sendo enviado pelo case 1");
	break;
	case 2:
	console.log("Cai dentro do case 2");
	break;

	default:
	console.log("Nenhuma das opções");
	break;
}

