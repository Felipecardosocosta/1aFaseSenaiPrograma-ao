//const qtdBrinq = Number(document.getElementById("nuBrinq"))


function enviou() {
    const qtdBrinq = Number(document.getElementById("nuBrinq").value)
    const result = document.getElementById("Ecomoeda")
    console.log(qtdBrinq)
    if (qtdBrinq === 0) {
        result.innerHTML = `Voce nao ganhou nada!`

    } else if (qtdBrinq === 1) {
        result.innerHTML = `Voce ganhou uma moeda!`
    } else if (qtdBrinq === 2) {
        result.innerHTML = `Voce ganhou duas moedas!`
    } else if (qtdBrinq >= 3) {
        result.innerHTML = `Voce ganhou Tres!`
    }

}
