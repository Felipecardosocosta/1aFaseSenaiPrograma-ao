// 9. Mensagem de Boas-vindas Personalizada
// Crie um campo de texto onde o usuário digita uma mensagem
// de boas-vindas. Essa mensagem deve ser exibida no topo da
// página e salva no localStorage.

class Msg{
    constructor(){
        this.msg =this.pesquisar()

    }
    salva(){
        localStorage.setItem("mensagems", this.msg)
    }
    pesquisar(){
        return localStorage.getItem("mensagems") ||"Seja Bem Vindo"
    }
    mostrar(){

        let mostrador = this.boasVindasPersonalizada()

        mostrador.innerText = this.msg
    }
    boasVindasPersonalizada(){

        return document.getElementById("msgTitulo")

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