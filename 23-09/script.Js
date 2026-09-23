// let idade = 21
// if ( idade >= 18) {
//     console.log("maior de idade");

// } else {
//     console.log("menor de idade")

// }
// let media = 7

// if (media>= 7) {
//     console.log("aprovado");

// } else {
//     console.log("reprovado");
    
// }
//----------ESTRUTURAS DE REPETICAO -------------
// console.log("1")
// console.log("2")
// console.log("3")
// console.log("4")
// console.log("5")
// console.log("6")
// console.log("7")
// console.log("8")
// console.log("9")
// console.log('10')


// // FOR
// // for (variavel); condicao; incremento) {

// // }

// //
// //for (variavel ; condicao; incremento) {

// //}

// for (let index = 0; index < 10; index++) {
//      console.log(index);
// }


//decremento
// for (let index = 10; index >= 0; index--) {
//     console.log(index);
// }

//INCRIMENTO PERSONALIZADO
// for (let index = 10; index >= 0; index-=2) {
//     console.log(index);
// }
// //EXERCICIOS
// // exercicio 01- Contador
// // crie um programa que utilize for para exibir no console os numero de 1 ate 20
// for (let index = 1; index <= 20; index++) {
//     console.log(index);
// }

// // exercicio 02 - multiplos
// // ultilize um for para exibir no console os multiplos de 5 ente 5 e 50
// for (let index = 5; index <= 50; index += 5){
//     console.log(index);
// }

// // exercicio 03 - decremento
// // ultilize um for para exibir no console uma contagem regressia de 10 ate  0
// // e depois uma mensagem "contagem finalizada".
// for (let index = 10; index >= 0; index--) {
//     console.log(index);
// }

// ------------ WHILE
// let contador = 0;
// while (contador <= 10) {

//   console.log(contador);

//      contador++;
// }

// exercicio 01 - contagem
// ultilize while para exibir no console os numeros de 10 ate 20.
// let contador = 10;
// while (contador <=20){
// console.log(contador);
//       contador++
// }
// // exercicio 02 - numeros pares
// // ultilize while para exibir os numeros pares de 2 ate 20.

// let par = 2;

// while (contador <= 20) {
// console.log(par);
//  par=+ 2;
// }

// ------------- DO .... WHILE
// let n = 10;
// while (n < 5){
//     console.log("WHILE");

// }

// do {
//   console.log("DO ... WHILE");

// } while (n < 5);

// let contador = 0;
// do {
//     console.log(contador);

//     contador++;

//} while (contador <= 10);

// exercicios 
// exercicio 01 - contagem
// ultilize do ...while para exibir os numeros de ate 10 a 100.
// let numero = 10;

// do { 
//     console.log(numero);
 
//       numero ++;


// }while (numero <=100);



// // exercicio 02 - contagem regressiva
// // ultilize do...while para exibir uma contagem regressiva de ate 10 ate 1.

// let contagem = 10;

// do {
//     console.log(contagem);

//     contagem--;

// } while( contagem >= 1);

// ------------ ARRAY (LISTA) ----------

let nome1 = "levi"
let nome2 = "duda"
let nome3 = "gustavo"
let nome4 = "bernardo";

//              1       2       3           4
let nomes = [ "levi",  "duda",  "gustavo", "bernardo"];//criaçao do array/lista 

console.log(nomes);// mostra a lista completa na mesma linha

console.log(nomes[1]);//Mostra o item da posicao mencionada entre colchetes

nome4 = "ana";
nomes[3] ="ana"; //altero o valor na posicao especifica

console.log(nomes.length);//mostra o tamanho do array
