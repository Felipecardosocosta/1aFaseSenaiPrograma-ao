class Msg{
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
    onText(){
        let texto = this.entradaDados().value
        this.msg = texto 
        this.salva()
    }
}

let msg = new Msg()

msg.mostrar()