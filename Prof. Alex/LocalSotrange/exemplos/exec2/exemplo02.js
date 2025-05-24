const bancoDados = localStorage


let dados = JSON.parse(bancoDados.getItem("lista")) || []
let result = document.getElementById("lista")

let alouu = dados.forEach(element => result.innerHTML += `<div class = "nomes"><li>${element}</li></div>`);
alouu

document.getElementById("list").addEventListener("keypress",
    function precionouOque(event) {
        event.key === "Enter" ? enviar() : false
    })

function enviar() {
    result.innerHTML = ""

    const nomeDaLista = document.getElementById("list").value
    console.log(nomeDaLista);
    if (nomeDaLista.length == 0) {
        alert("digita alguma coisa seu lerdo!!!")
        location.reload()


    } else {

        dados.push(nomeDaLista)

        bancoDados.setItem("lista", JSON.stringify(dados))

        location.reload()

    }
}
