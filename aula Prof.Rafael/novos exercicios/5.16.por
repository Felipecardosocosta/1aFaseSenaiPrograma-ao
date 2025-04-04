/*// 5.16 //
Cria aí um programa para ler 3 números e escrevê-los em ordem crescente! */


programa {
  funcao inicio() {
    //descrição de variaveis

    real numero1 , numero2, numero3

    //entrada de dados

    escreva("Digite o primeiro numero: ")
    leia(numero1)
    escreva("Digite o segundo numero: ")
    leia(numero2)
    escreva("Digite o terceiro numero: ")
    leia(numero3)

    //Processamento de dados

    se(numero1 < numero2 e numero1 < numero3 e numero2 < numero3){
      escreva(numero1 ," "+ numero2 ," ", numero3)


    }senao se(numero1 < numero2 e numero1 < numero3 e numero3 < numero2){
      escreva(numero1 ," ", numero3 ," ", numero2)

    
    }senao se(numero2 < numero1 e numero2 < numero3 e numero1 < numero3){
      escreva(numero2 ," ", numero1 ," ", numero3)
    
    
    }senao se(numero2 < numero1 e numero2 < numero3 e numero3 < numero1){
      escreva(numero2 ," ", numero3 ," ", numero1)
    
    
    }senao se(numero3 < numero2 e numero3 < numero1 e numero1 < numero2){
      escreva(numero3 ," ", numero1 ," ", numero2)
    
    
    }senao se(numero3 < numero2 e numero3 < numero1 e numero2 < numero1){
      escreva(numero3 ," ", numero2 ," ", numero1)
    
    
    
    }
    
 


    
  }
}
