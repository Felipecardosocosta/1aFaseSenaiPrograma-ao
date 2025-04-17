//id="valor"
//id="tipo"
//id = "saldo"
let enviar = document.getElementById("enviar")
enviar.addEventListener("click", clicou)
let tipo = document.getElementById("tipo")
tipo.addEventListener("change", opcao)

let seletor
let ganhos = 0
let despesa = 0
let saldo = 0
let historicoGanhos = []
let historicoDespesas = []



function opcao() {

    seletor = this.value
    console.log(seletor)

}


function clicou() {
    const valorDigitado = Number(document.getElementById("valor").value)
    const saldos = document.getElementById("saldo")
    const descriçao = document.getElementById("descriçao").value
    console.log(descriçao)

    if (valorDigitado === 0 || descriçao == 0 || seletor === "escolha" || descriçao >= 1) {
        console.log("Nao digitou nada")
        alert("[Erro] Verifique Se o Formulario Foi Preenchido!!")


    } else

        if (seletor === "ganhos") {
            const hist = document.createElement("li");

            ganhos += valorDigitado

            saldo = ganhos - despesa

            let valorFormatado = saldo.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            })


            saldos.innerHTML = `<strong>Seu saldo é ${valorFormatado}</strong>`

            console.log(saldo)

            historicoGanhos.push(valorDigitado)
            hist.innerHTML = `${descriçao}:  +R$${valorDigitado}<hr>`

            document.getElementById("cont").appendChild(hist)

            if (saldo < 0) {

                saldos.style.backgroundColor = "rgb(187, 21, 21)"

            } else {
                saldos.style.backgroundColor = "rgb(103, 204, 2)"

            }

        } else if (seletor === "despesa") {
            const hist = document.createElement("li")

            despesa += valorDigitado

            saldo = ganhos - despesa

            let valorFormatado = saldo.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            })

            saldos.innerHTML = `<strong>Seu saldo é ${valorFormatado}</strong>`
            console.log(saldo)




            historicoDespesas.push(despesa)
            hist.innerHTML = `${descriçao}:   -R$${valorDigitado}<hr>`
            document.getElementById("cont").appendChild(hist)
            if (saldo < 0) {

                saldos.style.backgroundColor = "rgb(187, 21, 21)"

            } else {
                saldos.style.backgroundColor = "rgb(103, 204, 2)"

            }

        }
    console.log(historicoDespesas)
    console.log(historicoGanhos)
}











