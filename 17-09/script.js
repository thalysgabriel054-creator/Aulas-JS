// letnota = 6

// if (nota < 5) {
//     console.log("thalys reprovado");

// // }else if (nota < 7) {
// // }esle if nota == 5 || nota 6) {
// }else if (nota >= 5 && nota < 7) {
//      console.log("thalys reprovado");   
// }else{
//     console.log("thalys reprovado");

// }
// }


// 01 - temperatura
// crie uma variavel chamada temperartura.
// ultilize uma estrutura condicional para verificar:
//•     temperatura maior que 30  -"esta quente!"
//•     temperatura entre 20 e 30 -"emperatura agradave."
//•     temperatura menor que 20 - "esta frio!"
//•     exiba no console.

                            // Resposta 1
let temperatura = 25;

if(temperatura > 30) {
    console.log("esta quente!");
}else if (temperatura >= 20 && temperatura <= 30) {
    console.log("temperatura agradavel.");
}else {
    console.log("esta frio");

}
//
// 02 -Velocidade do veiculo
// Crie uma variavek chamada velocidade.
// Verifique:
// •    ate 60 km/h - "Velocidade permitida"
// •    acima de 60 km/h e ate 80 km/h - "atençao: velocidade acima do permitido"
// •    acima de 80 km/h - "Velocidade muito alta"
// exiba a mensagem correspondente no console.

                        // resposta 2
let velocidade = 75;
if(velocidade <= 60) {
    console.log("Velocidade permitida");
} else if (velocidade > 60 && velocidade <= 80)  {
    console.log("atençao:  velocidade acima do permitido");
}else {
    console.log("velocidae muito alta");
}

//
// 03 - estoque
// crie uma variavel chamada quantidadeestoque.
// verifique :
// •    quantidade igual a 0 - "produto esgotado"
// •    quantidade entre 1 e 10 - "estoque baixo"
// •    quantidade acima de 10 - "estoque disponivel"
// exiba a situaçao do estoque

                //resposta 3
let quantidadeestoque = 8;
if (quantidadeestoque === 0)  {
    console.log("produto esgotado");
}else if (quantidadeestoque >= 1 && quantidadeestoque <= 10) {
     console.log("estoque baixo");
} else {
    console.log("estoque disponivel");

}

// exercicio 04 - login
// crie duas variaveis:
// let usuario ="adim";
// let  senha ="1234";
// verifique se o usuario e a senha estao corretos.
// se estiverem corretos: login realizados com sucesso
// se nao: usuario ou senha incorretos

let usuario = "adimin";
let senha = "1234";

if (usuario === "adimin" && senha === "1234") {
    console.log("login realizado com sucesso");
}else {
    console.log("usuario ou senha incorretos");
}

//
//exercicio 05 - horario do dia
// crie uma variavel vhamada hora contendo um valor entre 0 e 23.
// ultilize condicional para informar:
// •    0 ate 11 - "Bom dia"
// •    12 ate 17 -"boa tarde"
// • 18 ate 23 -  "boa noite"
let hora = 14;
if (hora >= 0 && hora <= 11) {
    console.log("bom dia");
}else if (hora>= 12 && hora <= 17) {
    console.log("boa tarde");
}else if (hora >= 18 && hora <= 23) {
     console.log("boa noite");
}


// exercicio 06 - classifique de nota de um produto
// uma loja recebe avaliaçoes de seus clientes ultilizados nota de 1 a 5.
//crie uma variavel chamsda nota.
// classifique  a avaliaçao:
// •    5 - "execelente"
// •    4 - "muito bom"
// •    3 -"bom"
// •    2 - "regular"
// •    1 - "ruim"
// caso a nota nao esteja entre 1 e 5, exiba "nota invalida".

let nota = 5;

if (nota === 5) {
    console.log("excelente");
} else if (nota === 4) {
    console.log("muito bom");
} else if (nota === 3) {
    console.log("bom");
} else if (nota === 2) {
    console.log("regular");
} else if (nota === 1) {
    console.log("ruim");
} else {
    console.log("nota inválida");
}


// exercicio 07 -tipo de ingresso
// crie uma variavel chamada tipoingresso.
// ela pode recener:
// "inteira"
// "meia"
//"vip"
// ultilize condicionais para exibir o preço correpondente:
// •   inteira - R$ 40
// • meia - R$ 20
// • vip - R$ 80
// caso seja informado outro tipo , exibiu:
// tipo de ingresso invalido
 
let tipoingresso = "vip";

if (tipoingresso === "inteira") {
    console.log("R$ 40");
} else if (tipoingresso === "meia") {
    console.log("R$ 20");
} else if (tipoingresso === "vip") {
    console.log("R$ 80");
} else {
    console.log("tipo de ingresso inválido");
}

