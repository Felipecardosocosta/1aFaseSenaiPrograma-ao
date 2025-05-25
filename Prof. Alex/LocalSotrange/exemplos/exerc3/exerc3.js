const bandoDados = localStorage

let lista = JSON.parse(bandoDados.getItem("ListaArray")) || []

const result = document.getElementById("item")
const resultValor = document.getElementById("preç")
const botoes = document.getElementById("delet")
const keypressEnter = document.getElementById("valor").addEventListener("keypress", function entrerPress(event) {

    event.key === "Enter" ? iniciar() : false

})


function atualizarBanco() {
    bandoDados.setItem("ListaArray", JSON.stringify(lista))
    location.reload()
}
function deletar(index) {

    lista.splice(index, 1)

    atualizarBanco()
}
function mostraLista() {

    lista.forEach((element, index) => {

        result.innerHTML += `<div class = "linhas"> <p>${element.nome}<p></div>`

        resultValor.innerHTML += `<div class = "linhas"><p>R$:${element.preço}</p> </div>`

        botoes.innerHTML += `<div class="linhasButton"><p><button onclick = "deletar(${index})">Deletar</button><p/></div>`

    });

}
mostraLista()
function iniciar() {

    const produdoDigitado = document.getElementById("listaUser")
    const preçoProduto = document.getElementById("valor")

    if (produdoDigitado.length === 0) alert("Digita ai vai")

    else {
        lista.push({ nome: produdoDigitado.value, preço: preçoProduto.value })

        atualizarBanco()


    }

}
let loul = []
