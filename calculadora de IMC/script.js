const formulario = document.getElementById("formulario");
const nomeResultado = document.getElementById("nomeResultado");
const pesoResultado = document.getElementById("pesoResultado");
const alturaResultado = document.getElementById("alturaResultado");
const imcResultado = document.getElementById("imcResultado");
const classificacao = document.getElementById("classificacao");
const mensagemErro = document.getElementById("mensagemErro");
const resultado = document.getElementById("resultado");





formulario.addEventListener("submit", function (event) {
    event.preventDefault();


mensagemErro.textContent = "";
resultado.style.display = "none";


const nome = document.getElementById("nome").value.trim();
const peso = parseFloat(document.getElementById("peso").value);
const altura = parseFloat(document.getElementById("altura").value);


 if (!nome || isNaN(peso)  || isNaN(altura) ) {
     mensagemErro.textContent = " preencha todos os campos corretamente.";
    return;
 }

 if (peso <= 0 || altura <= 0) {
     mensagemErro.textContent = " o peso e a altura devem ser maiores que zero,";
    return;
 }


 const imc = peso / (altura * altura);

 let classificacaotexto;

 if (imc < 18.5) {
    classificacaotexto = "abaixo do peso";
 }else if (imc < 25) {
    classificacaotexto = "peso normal";
 }else if (imc < 30) {
    classificacaotexto = "sobrepeso";
 }else if (imc < 35) {
    classificacaotexto = "obesidade grau 1";
 }

nomeResultado.textContent = nome;
pesoResultado.textContent = peso.toFixed(1);
alturaResultado.textContent = altura.toFixed(2);
imcResultado.textContent = imc.toFixed(2);
classificacao.textContent = classificacaotexto;





resultado.style.display ="block";

});