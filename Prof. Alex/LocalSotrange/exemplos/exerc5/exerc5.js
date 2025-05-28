const bancoDados = localStorage

let visitas = JSON.parse(bancoDados.getItem("visitas")) || 1

let tema = JSON.parse(bancoDados.getItem("tema")) || "claro"

if (tema == "claro") {

    document.getElementById("body").style.backgroundColor = "white"
    document.getElementById("body").style.color = "black"


} else if (tema == "escuro") {
    document.getElementById("body").style.backgroundColor = "black"
    document.getElementById("body").style.color = "white"

}
function salvar() {

    bancoDados.setItem("visitas", JSON.stringify(visitas))
    bancoDados.setItem("tema", JSON.stringify(tema))
}

const divVisita = document.getElementById("visual")

divVisita.innerHTML = `<h3>Suas visitas: ${visitas}</h3>`
visitas++

function escuro() {
    tema = "escuro"
    salvar()
    document.getElementById("body").style.backgroundColor = "black"
    document.getElementById("body").style.color = "white"

}
function claro() {
    tema = "claro"
    salvar()
    document.getElementById("body").style.backgroundColor = "white"

    document.getElementById("body").style.color = "black"

}
salvar()