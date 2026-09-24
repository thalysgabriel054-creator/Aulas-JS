//  let nome1 = "levi"
// let nome2 = "duda"
// let nome3 = "gustavo"
// let nome4 = "bernardo";

// //              1       2       3           4
// let nomes = [ "levi",  "duda",  "gustavo", "bernardo"];//criaçao do array/lista 

// console.log(nomes);// mostra a lista completa na mesma linha

// console.log(nomes[1]);//Mostra o item da posicao mencionada entre colchetes

// nome4 = "ana";
// nomes[3] ="ana"; //altero o valor na posicao especifica

// console.log(nomes.length);//mostra o tamanho do array

// exercicio 07 - lista de frutas
// crie um array chamado frutas contendo 5 frutas.
// depois:
// 1.    exiba o array completo
// 2.    exiba a primeira fruta.
// 3.    exiba a terceira fruta.
// 4.    exiba a quantidade de frutas.
// let fruta = ["laranja","melancia","limao","banana","manga"];
// console.log(fruta);
// console.log(fruta [0]);
// console.log(fruta [2]);
// console.log(fruta.lenght);


// // exercicio 08 - lista de cidades
// // crie um array comtendo 5 cidades brasileiras.
// // depois
// // 1.    exiba o array completo.
// // 2.    altere a segunda cidadew.
// // 3.    exiba a segunda cidade
// // 4.    exiba a quantidade de cidades.

// let cidades = ["sao caetano","rio de janeiro","campinas","salvador","sao paulo"]
// console.log(cidades);
// cidades[1] = "salvador"
// console.log(cidades [1]);
// console.log(cidades.length);


// exercicios
// exercicio 09 - nomes
// crie um array com 6 nomes
// ultilize um for para exibir todos nomes no console

// let nomes = ["ana","joao","pedro","henrique","lucas","arthur"]
// for (let numero = 0; numero < nomes.length; numero++){
//     console.log(nomes[numero]);
// }
// // exercicio 10 - preços
// // crie um array contendo 5 preços de produtos
// // ultilize um for para exibir todos os preços
// let preços = [10.50, 25.90, 7.99, 45.00, 12.50];

// for(let numero = 0; numero < preços.length; numero++) {
//    console.log(preços[numero]);
// }


// //exercicio 11 - produtos e preços
// // crie dois arrays, um contendo 5 nomes de produtos e
// // outro contendo 5 preços de produtos.
// // ultilize um for para exibir todos os nomes e preços .

// let produtos = ["arroz", "feijao","macarrao","leite","cafe"];
// let valores = [25.00, 8.50, 6.99, 5.50, 18.00];

// for(let numero  = 0; numero < produtos.length; numero++) {
//     console.log(produtos[numero]+ " - R$" + valores[numero]);
//}

// 
// let numeros = [5, 9, 10,2,20,32,7,17,9,12]
// for(let index = 0; index < numeros.length; index++) {//contando de 0 a 10

//     if(numeros[index]>= 10) {//verificcando se e maior ou igual a 5
//         console.log(numeros[index]);//mostra o numero do array

//     }

// }

// let numeros = [5, 9, 10,2,20,32,7,17,9,12]
// for(let index = 0; index < numeros.length; index++) {//contando de 0 a 10
//       let sobra = numeros[index] % 2;

//       if(sobra == 0) {
//     console.log("o numero" + numeros[index] + " e par");


//       } else {
//         console.log("o numero" + numeros[index] + " e impar");
         
//       }
// }

// exercicio 01 - analisando notas
// crie um array com 8 notas .
// ultilize for para percorrer as notas e if/else para informar:
// -    nota maior ou igual a 7 - "aprovado"
// -    nota menor que 7 - "reprovado"
 let notas = [8,6,9,5,7,4,10,6]
    for(let numero = 0; numero < notas.length; numero++) {
       if (notas[numero] >= 7) {
          console.log(notas[numero] + "- aprovado");
       }else {
        console.log(notas[numero] + "- reprovado");
       }

    }


// exercicio 02 - temperutas
// crie um array contendo 7 temperaturas:
// percorra o array e classifique cada temperatura:
// -    maior que 30 - "quente"
// -    entre 20 e 30 - "agradavel"
// -    menor que 20 -"frio"

let temperaturas = [32,25,15,10,38,29,20]
     for(let numero = 0; numero < temperatura .length; numero++) {
        if (temperaturas[numero]> 30) {
         console.log(temperaturas[numero] + "- quente");    
        }else if (temperaturas[numero] >= 20 && temperatura [numero]<= 30) {
            console.log(temperaturas[numero] + "- agradavel");
        }else {
            console.log(temperatura[numero] + "- frio");
        }
     }


