//const qtdBrinq = Number(document.getElementById("nuBrinq"))

let banco = [
    {   nome: "felipe",
        ident: "0888",
        ecomoeda: 0   
    }
]
    

    

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
    let Ecomoed = 2

    let nome = document.getElementById("nomeUsuario").value
    let registro = document.getElementById("registro").value

    console.log(registro)

    let cadastro = banco.find(item=> item.ident == registro)

    console.log(cadastro)



    if(cadastro != undefined){

        cadastro.ecomoeda += Ecomoed
        console.table(cadastro)


    }else {
        banco.push({nome: nome, ident: registro, ecomoeda: Ecomoed })

        console.table(banco)


    }



   

    

}
