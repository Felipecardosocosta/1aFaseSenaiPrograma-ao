/* Em uma festa de família alemã, 45 pessoas foram convidadas para beber.
 Para tanto, foram comprados 300 litros de chopp. Criar um programa que calcule a média de litros bebidos por pessoa,
  considerando ainda a quantidade de chopp (litros) desperdiçado e a quantidade de chopp (litros) que sobrou. 
  Esses dados devem ser digitados pelo usuário. Caso não tenha havido desperdício e não tenha sobrado chopp, digitar 0 para ambos.
   Ao final, mostrar a média de litros bebidos por pessoa na festa.*/






programa {
  funcao inicio() {

    //Declaraçao de variaveis

    real litroDesperdicado, litrosSobra, mediaBebida, mediaPessoa

    // variaveis fixa

    real pessoas = 45, litrosDeChopp = 300

    //Entrada de dados

    escreva("Por favor digite a quandidade de litros desperdiçado : ")
    leia(litroDesperdicado)

    escreva("Por favor digite a quandidade de litros que sobraram : ")
    leia(litrosSobra)

    
    //Prossecamento de dados
    
    mediaBebida= litrosDeChopp - litroDesperdicado - litrosSobra

    mediaPessoa = mediaBebida / pessoas


    //Saida de dados

    escreva("A media bebida por pessoa foi : " , mediaPessoa ," Litros")



    
  }
}
