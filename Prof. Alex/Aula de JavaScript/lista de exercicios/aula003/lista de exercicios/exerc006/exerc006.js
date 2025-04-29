function tentar(){
    let conferir =document.getElementById("numeroDigitado").value.length
    let numero = Number(document.getElementById("numeroDigitado").value)
    console.log(conferir)
    if(conferir ===0 ||numero <1 || numero >100){
        alert("[ERRO] Digite um numero de 1 a 100")
    }else {
        let max = 100
        let min = 1
        let numeroAleatorio = Math.round(Math.random()*(max-min)+min)

        if(numero === numeroAleatorio){
            document.getElementById("resultado").innerHTML = `<p>Voce Ganhou!!!</p>`
            document.getElementById("resultado").style.backgroundColor = "Green"
        }else {
            document.getElementById("resultado").innerHTML = `<p>Voce Perdeu!!!
            <br> Numero da maquina foi:  ${numeroAleatorio}</p>`
            document.getElementById("resultado").style.backgroundColor = "Red"
        }

























    }













    
}