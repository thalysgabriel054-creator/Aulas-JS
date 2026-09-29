// let produto = "shampoo";
// let produtos = ["shampoo", "vassoura"];
// let produto1 = {
//     nome: "shampoo",
//     valor: 20.50,
//     descriçao: "shampoo muito chieroso"
// }
//  console.log(produto1);
//  console.log(produto1.nome);
//  produto1.descriçao = "shampoo muito cheiroso";
//  console.log(produto1.descriçao);
 
 //ex 1
 //exiba os atributos do produto ultilizando o console log
 //produto: shampoo - valor: R$20.50 - descriçao: shampoo muito cheiroso

// let produto = "shampoo";
// let valor = 20.50;
// let descriçao = "shampoo muito cheiroso";

// console.log("produto", produto);
// console.log("valor R$", valor);
// console.log("descriçao", descriçao);

//EX 2
//CRIE UM OBJETO ALUNO, COM OS ATRIBUTOS NOME, IDADE E CURSO
//EXIBA NO CONSOLE A FRASE
// ALUNO:  (NOME DO ALUNO) - IDADE: (IDADE DO ALUNO) -  CURSANDO : (NOME DO CURSO)
 
const aluno = {
   nome : "joao",
   idade : 17,
   curso : "informatica"
}
console.log("aluno: " + aluno.nome +  " idade: " + aluno.idade + " cursando: " + aluno.curso);


// ex 3 - cadastro de produtos 
//crie um array contendo 5 nomes de produto.
// ultilize uma estrutura de repetiçao para exibir cada produto seguindo o formato:
// produto 1 : teclado
// produto 2 : mouse 
// produto 3 : monitos
// produto 4 : headset
// produto 5 : webcam
//desafio ultilize o indice do array para gerar automaticamente o numero do produto

let produtos = ["teclado", "mouse", "monitor", "headset","webcam"];
let numeros = [1, 2, 3, 4, 5 ]
for (let index = 0; index < produtos.length; index ++) {
    console.log(numeros[index] , "Produto: " + produtos[index]);
}
