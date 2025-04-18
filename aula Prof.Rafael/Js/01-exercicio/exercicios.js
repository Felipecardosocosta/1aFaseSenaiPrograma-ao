const resultado = document.getElementById("Resultado")

function somar() {
    let soma, n1, n2
    n1 = Number(prompt("primeiro numero"))
    n2 = Number(prompt("Segundo numero"))

    soma = n1 + n2


    alert(`A soma é ${soma}`)

    resultado.innerHTML = `sua soma é ${soma}`

}
function diminuir(){
    
}
