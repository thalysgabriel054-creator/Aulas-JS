//pegar os elementos no html

const formulario = document.getElementById("formulario");

const nome = document.getElementById("nome");
const nascimento = document.getElementById("nascimento");

const nomeresultado = document.getElementById("nomeResultado");
const dataresultado = document.getElementById("dataResultado");
const idaderesultado = document.getElementById("idadeResultado");
const boxresultado = document.getElementById("resultado")

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    //impede que a tela recarregue

    //pegar o valor dos inputs
    const valornome = nome.value;
    const valornascimento = nascimento.value;

    // console.log(valornome);
    // console.log(valornascimento);
    
    //separa em 3 valores

const dataseparada = valornascimento.split("-");

//console.log(dataseparada);


//armazena as datas separadas em formato numerico
const anonascimento = Number(dataseparada[0]);
const mesnascimento = Number(dataseparada[1]);
const dianascimento = Number|(dataseparada[2]);

//console.log(anonascimento)

const hoje = new Date();

const anoatual = hoje.getFullYear();//pega somente o ano
const mesatual = hoje.getMonth();//pega somente o mes
const diaatual = hoje.getDay();//pega somente o dia

// console.log(hoje);
// console.log(anoatual);
// console.log(mesatual);
// console.log(diaatual);

let idade = anoatual - anonascimento;//calcula a idade ultilizando o ano

if (mesnascimento > mesatual) {//verifica se o mes de nascimento e maior que o mes atual
    idade = idade -1;
}

if (mesnascimento == mesatual) {
    if(dianascimento > diaatual) {
        idade = idade -1;
    }

}

// if nascimento > mesatual   ||  (mesnascimento == mesatual && dianascimento > d)
// idade = idade -1;
// }   

//console.log(idade);


//
const dataformatada = dianascimento + "/" + mesnascimento + "/" + anonascimento;

//inserido o valores nos elementos HTML
nomeresultado.textContent = valornome;
dataresultado.textContent = dataformatada;
idaderesultado.textContent = idade;

//exibindp o elemento com as informçoes
boxresultado.style.display = "block";





})
