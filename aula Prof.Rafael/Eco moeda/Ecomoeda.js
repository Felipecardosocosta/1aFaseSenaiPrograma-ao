//const qtdBrinq = Number(document.getElementById("nuBrinq"))

let banco = {
    
}
    

let pagina
let paginaVenda = document.getElementById("venda")
let seletor = document.getElementsByName("Pagina")
paginaVenda.addEventListener("change",function (){
    pagina = this.value
    console.log (pagina)
})





function enviou() {
    const qtdBrinq = Number(document.getElementById("nuBrinq").value)
    const result = document.getElementById("Ecomoeda")
    let Ecomoed = 0
   

    if (qtdBrinq === 0) {

        
        result.innerHTML = `<p>Voce nao ganhou nada!</p>`

    } else if (qtdBrinq === 1) {
        Ecomoed += 1
        console.log(Ecomoed)
        

        result.innerHTML = `<p>Voce ganhou ${Ecomoed} Ecomoeda</p>`

    } else if (qtdBrinq === 2) {
        Ecomoed += 2
        

        result.innerHTML = `<p>Voce ganhou ${Ecomoed} Ecomoeda</p>`
    } else if (qtdBrinq >= 3) {
        Ecomoed += 3
        
        result.innerHTML = `<p>Voce ganhou ${Ecomoed} Ecomoeda</p>`
    }

    console.log(banco)

}
