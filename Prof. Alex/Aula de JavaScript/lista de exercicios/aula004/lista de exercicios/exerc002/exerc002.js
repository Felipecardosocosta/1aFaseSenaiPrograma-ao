let criarNumeroAleatorio = (n) => {

    let numero = Math.round(Math.random() * (n - 1) + 1)

    return numero


}

let test = criarNumeroAleatorio(5)
console.log(test)



let array = [{
    nome: "felipe",
    idade: 29,
    saudaçao(n=0, i) {
        
        console.log(`Ola eu sou o ${this.nome} e tenho ${this.idade}`)

        for(let cont=0  ;cont<=i  ;cont++){
            n = this.idade + cont
            console.log(`Agora minha idade é ${n}`)
            
        }
        this.idade = n
    }
},{
    nome: `Dara`,
    idade: 18

}


]




array[0].saudaçao(1,5)
array.push({
    nome: `oie`,
    idade: 5
    ,amor: `eu`
    })
array.forEach(amor=> amor.amor = `felipe`)
let descobrindo = array.filter(estilo => estilo.amor === 'felipe').map(d=> d.nome) //.reduce(oie=> oie.amor =="felipe")

// let naosei = array.fill(amorr=> amorr.amor = `euuuuu`)
// console.log(naosei);


console.log(descobrindo)

console.log(array);




