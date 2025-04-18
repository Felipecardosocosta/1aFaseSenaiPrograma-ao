//const qtdBrinq = Number(document.getElementById("nuBrinq"))

let banco = [
    ["nome"],
    ["id"],
    ["Ecomoeda"]
]


function enviou() {
    const qtdBrinq = Number(document.getElementById("nuBrinq").value)
    const result = document.getElementById("Ecomoeda")
    let Ecomoed = 0
    banco[0].push(prompt("Digite seu nome"))
    banco[1].push(Number(prompt("Digite seu id")))
    console.log(banco)


    if (qtdBrinq === 0) {

        result.innerHTML = `Voce nao ganhou nada!`

    } else if (qtdBrinq === 1) {
        Ecomoed += 1
        console.log(Ecomoed)
        banco[2].push(Ecomoed)

        result.innerHTML = `Voce ganhou ${Ecomoed} Ecomoeda`

    } else if (qtdBrinq === 2) {
        Ecomoed += 2
        banco[2].push(Ecomoed)

        result.innerHTML = `Voce ganhou ${Ecomoed} Ecomoeda`
    } else if (qtdBrinq >= 3) {
        Ecomoed += 3
        banco[2].push(Ecomoed)
        result.innerHTML = `Voce ganhou ${Ecomoed} Ecomoeda`
    }

    console.log(banco)

}
