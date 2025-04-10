/*12. Poção Misteriosa
    História:
    Para preparar uma poção, o bruxo precisa misturar exatamente dois ingredientes
    certos.
    Desafio:
    let ingrediente1 = "pele de sapo";
    let ingrediente2 = "asa de morcego";
    Verifique se os ingredientes são exatamente esses. Se forem, diga "Poção
    pronta!", senão "Mistura errada!" */

    const ingredienteCorreto1 ="pele de sapo"
    const ingredienteCorreto2 = "asa de morcego"
    const resposta = document.getElementById("resposta")

    let ingrediente1
    let ingrediente2







function clicar(){

    ingrediente1 = prompt('Digite o primeiro ingrediente da poção magica: ')

    ingrediente2 = prompt('Digite o segundo ingrediente: ')

    if(ingrediente1 === ingredienteCorreto1 && ingrediente2 ===ingredienteCorreto2){
        console.log('Poção pronta!!')
        alert('Poção pronta!')
        resposta.innerText = "Poção pronta!"

    }else {
        console.log('Mistura errada!')
        alert('Mistura errada! Aperte o iniciar para tentar novamente')
        resposta.innerText = "Mistura errada! Aperte o iniciar para tentar novamente "
    }
    }
    
    




