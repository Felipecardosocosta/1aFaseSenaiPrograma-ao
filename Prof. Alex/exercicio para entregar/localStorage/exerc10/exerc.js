// 10. Número Secreto
// Gere um número aleatório entre 1 e 10 e salve no localStorage.
// O usuário deve tentar adivinhar o número. Mesmo que ele
// feche o navegador, o número continua sendo o mesmo até ele
// acertar.


class NumeroSecreto{

constructor(){
    this.numeroSecrt = this.pesquisa()

}
gerandoNumero(){
    let min = 1
    let max = 10

    return Math.round(Math.random()*(max-min)+min)
}
recebendoNumero(){
    return Number(document.getElementById("").value)||false
}
comparandoNumero(){

    let numero = this.recebendoNumero()

    return numero===this.numeroSecrt ? numero: false
}
salvandoNumero(){
    localStorage.setItem("NumeroSecret",JSON.stringify(this.numeroSecrt))
}
pesquisa(){
    return JSON.parse(localStorage.getItem("NumeroSecret"))
}
AnalizandoDados(){

    if (condition) {
        
    }

}
}
let novoJogo = new NumeroSecreto()

