const bandoDados = localStorage

let lista = JSON.parse(bandoDados.getItem("ListaArray")) || []

const result = document.getElementById("lista")
const keypressEnter= document.getElementById("valor").addEventListener("keypress", function entrerPress(event) {

    event.key === "Enter" ? iniciar(): false
    
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

        result.innerHTML += `<div class = "linhas"><h4>Produto; ${element.nome} Valor; ${element.preço} <button id="buttonDelet" onclick="deletar(${index})">Deletar</button></h4></div>`
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
