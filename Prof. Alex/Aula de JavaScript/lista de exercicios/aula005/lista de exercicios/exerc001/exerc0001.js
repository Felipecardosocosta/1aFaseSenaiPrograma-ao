// 🔸 Parte 1 – Condições simples (sem laço) [1–10]
// 1. Peça ao usuário sua idade e se ele tem carteira de motorista. Exiba "Pode
// dirigir" se for maior de 18 e tiver carteira.
// 2. Verifique se um número digitado é positivo e par.
// 3. Solicite um nome de usuário e uma senha. Exiba "Acesso permitido" se o
// nome for "admin" ou a senha for "1234".
// 4. Peça dois números. Exiba "Valores válidos" se um for positivo e o outro for
// negativo.
// 5. Peça uma nota. Exiba "Aprovado" se a nota for maior que 6 e menor ou igual a
// 10.
// 6. Peça um número. Exiba "Número inválido" se ele não estiver entre 1 e 100.
// 7. Peça a idade e se o usuário é estudante. Exiba "Meia entrada" se for menor de
// 18 ou estudante.
// 8. Peça se o usuário aceitou os termos (sim/não) e confirmou o email (sim/não).
// Exiba "Cadastro completo" se ambos forem "sim".
// 9. Peça a altura e o peso. Exiba "Apto para o esporte" se altura > 1.60m e peso
// entre 50 e 90 kg.
// 10. Verifique se uma pessoa não é maior de idade ou não aceitou os termos. Se
// for verdade, exiba "Acesso negado".

//1. Peça ao usuário sua idade e se ele tem carteira de motorista. Exiba "Pode
// dirigir" se for maior de 18 e tiver carteira.
function iniciarExerc1() {

    let idadeUsuario = Number(prompt("Qual sua idade?"))
    if (idadeUsuario >= 18) {
        let carteira = confirm("Voce tem carteita de motorista")
        verificarExerc1(idadeUsuario, carteira)
    } else verificarExerc1(idadeUsuario)
}
function verificarExerc1(resId, resCart) {
     if (resId >= 18 && resCart === true) alert("Voce pode dirigir")
    else if (resCart=== false) alert("Voce nao pode dirigir sem ter a carteira")
    else {alert("Voce é menor de idade ")
        iniciarExerc1()
} 

}

// 2. Verifique se um número digitado é positivo e par.

function iniciarExerc2() {
    let numDig = Number(prompt("Digite um numero"))

    if (numDig %2 == 0 && numDig >0) alert("O numero digitado é possitivo e par")
    else if (numDig %2 ===0) alert("o numero é par mais nao é positivo")
    else if(numDig<0) alert("O numero nao é par e nem positivo ")
    else alert ("O numero nao é par mais é positivo ")

}

//3. Solicite um nome de usuário e uma senha. Exiba "Acesso permitido" se o
// nome for "admin" ou a senha for "1234".

function iniciar() {
    let userCorreto = "admin"
    let senhaCorreta  = "1234"
    let usuário = prompt("Digite o usuario")
    let senha = prompt("Digite a senha")

    if(usuário === userCorreto && senha === senhaCorreta) alert("Acesso permitido")
    else alert("Acesso negado")

    

}