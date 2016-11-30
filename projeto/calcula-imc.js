
var tdPeso = document.getElementById("peso-2");
var tdAltura = document.getElementById("altura-2");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;
console.log(peso)
console.log(altura);

if(altura!=0){
var imc= peso/(altura*altura);
var tdImc = document.getElementById("imc-2");
tdImc.textContent= imc;

console.log(imc)
}else{
	console.log("Nção posso executar divisão por 0");
}