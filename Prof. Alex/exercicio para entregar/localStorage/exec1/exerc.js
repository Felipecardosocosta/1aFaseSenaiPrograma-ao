class Contador{
    constructor(){
        this.numero =this.pesquisar()

    }
    somar(){
        this.numero ++
        this.salva()
        this.mostrar()
    }
    diminuir(){
        this.numero--
        this.salva()
        this.mostrar()
    }
    salva(){
        localStorage.setItem("contador", JSON.stringify(this.numero))
    }
    pesquisar(){
        return JSON.parse(localStorage.getItem("contador")) || 0
    }
    mostrar(){

        let mostrador = this.entradaDados()

        mostrador.value = this.numero
    }
    entradaDados(){

        return document.getElementById("numeroCond")
    }
}

let contador = new Contador()

contador.mostrar()