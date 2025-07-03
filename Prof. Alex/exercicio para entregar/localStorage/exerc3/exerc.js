class ListaTarefas{
    constructor(){
        this.msg =this.pesquisar()

    }
    salva(){
        localStorage.setItem("mensagem", this.msg)
    }
    pesquisar(){

        return localStorage.getItem("mensagem") || this.entradaDados().value
    }
    mostrar(){

        let mostrador = this.entradaDados()

        mostrador.value = this.msg
    }
    entradaDados(){

        return document.getElementById("msg")
    }
    onClick(ondeClicou){

        let check = document.getElementById(ondeClicou)

        console.log(check);
        
        
    }
}

let lista = new ListaTarefas()

