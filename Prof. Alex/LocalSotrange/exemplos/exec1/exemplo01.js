const bancoDados = localStorage;


// let banco = JSON.parse(bancoDados.getItem("banco")) ||[{
//     nome: "felipe",
//     idade: 29,
//     cidade: "floripa"
//}]
let dados = JSON.parse(bancoDados.getItem("dados")) || bancoDados.setItem("dados", JSON.stringify("oie"))
console.log(dados);

const resultadoHtml = document.getElementById("result")

document.getElementById("nome").addEventListener("keydown", function verificar(event) {

    event.key === "Enter" ? iniciar() : false
    console.log(event.key);

})

function iniciar() {
    let nome = document.getElementById("nome").value

    bancoDados.setItem("dados", JSON.stringify(nome))

    resultadoHtml.innerHTML = JSON.parse(bancoDados.getItem("dados"))
}




