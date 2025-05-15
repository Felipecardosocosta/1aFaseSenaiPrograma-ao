/*🔸 Parte 2 – while com condições compostas [11–20]
1. Enquanto a senha digitada não for “abc123” e o número de tentativas for
menor que 3, peça a senha novamente.
Lista while-for complexos 1
2. Enquanto o usuário não aceitar os termos ou tiver menos de 18 anos, continue
perguntando.
3. Solicite dois números até que ambos sejam pares.
4. Peça uma letra até que ela não seja “a” e não seja “b”.
5. Solicite um número até que ele esteja entre 10 e 20 ou seja igual a 50.
6. Peça login e senha até que ambos estejam corretos.
7. Pergunte se o usuário deseja continuar (“sim” ou “não”) enquanto a resposta
não for “não”.
8. Solicite dois valores. Continue pedindo até que um seja múltiplo de 3 e o outro maior que 10.

9. Enquanto o nome digitado não for "admin" ou a senha não for "321", continue
pedindo login.
10. Enquanto não forem preenchidos nome e idade, continue solicitando. */

//1. Enquanto a senha digitada não for “abc123” e o número de tentativas for
//menor que 3, peça a senha novamente.
function iniciarExerc1() {
    let senCorr = "abc123"
    let cont = 0
    let senUser
    do {
        cont > 0 ? alert(`Voce errou a senha!!\nTente novamente\nVoce tem ${(-(cont - 3))} tentativas`) : console.log("Primeiro ciclo");


        senUser = prompt("Digite a senha: ")


        cont++
    } while (senCorr !== senUser && cont < 3)

    if (senUser === senCorr) alert("Acesso Permitido")
    else alert("Conta Bloqueada")

}
/* 2. Enquanto o usuário não aceitar os termos ou tiver menos de 18 anos, continue
perguntando.*/
function iniciarExerc2() {
    let userId
    let termos
    do {
        userId = prompt("Digite sua idade") < 18 ? true : false
        termos = prompt('Voce aceita os termos') == "sim" ? false : true


    } while (userId && termos)


}

//3. Solicite dois números até que ambos sejam pares.

function iniciarExerc3() {
    let num1
    let num2

    while (num1 % 2 !== 0 || num2 % 2 !== 0) {
        num1 = Number(prompt("digite um numero "))
        num2 = Number(prompt("digite outro numero "))

    }

}
/* 4. Peça uma letra até que ela não seja “a” e não seja “b”.*/
function iniciarExerc4() {

    let pergunta
    do {
        pergunta = prompt("Digite uma letra: ")


    } while (pergunta === "a" || pergunta === "b")
    alert(`letra ${pergunta} valida`)

}


//5. Solicite um número até que ele esteja entre 10 e 20 ou seja igual a 50.


function iniciarExerc5() {

    let cont
    do {
        cont = prompt("Digite um numero: ")

    } while (cont < 10 || cont > 20 && cont !== '50');
}

//6. Peça login e senha até que ambos estejam corretos.

function iniciarExerc6() {
    let login = 'DFC'
    let senha = '123'
    let userLogin = prompt('Digite o seu login:')
    let userSenha = prompt("digite sua senha: ")
    while (login !== userLogin || senha !== userSenha) {

        userLogin = prompt('Digite o seu login:')
        userSenha = prompt("digite sua senha: ")
    }
    alert("Logado!!")
}

//7. Pergunte se o usuário deseja continuar (“sim” ou “não”) enquanto a resposta não for “não”.


function iniciarExerc7() {

    let pergunta
    do {
        pergunta = prompt("Voce deseja continuar ? sim/nao") == "sim" ? false : true

    } while (pergunta);
    alert("voce continuou")

}
//8. Solicite dois valores. Continue pedindo até que um seja múltiplo de 3 e o outro maior que 10.

function iniciarExerc8() {

    let numeroMult
    let numeroMaior

    do {
        numeroMult = prompt("Digite um numero: ") % 3 == "0" ? false : true
        numeroMaior = prompt("Digite um numero: ") > "10" ? false : true
    } while (numeroMaior || numeroMult);
}

// 9. Enquanto o nome digitado não for "admin" ou a senha não for "321", continue
// pedindo login.

function iniciarExerc9() {

    let userName
    let userSenha

    do {
        userName = prompt('Digite o login: ') === `admin` ? false : true
        userSenha = prompt('Digite a sua senha: ') === "321" ? false : true

    } while (userName || userSenha)
}

//10. Enquanto não forem preenchidos nome e idade, continue solicitando. */

function iniciarExerc10() {

    let userName
    let userId

    do {
        userName = prompt("Digite seu nome") === "" ? true :false
        

        userId = prompt("Digite sua idade") === "" ? true: false
        
    } while (userName || userId);

}












