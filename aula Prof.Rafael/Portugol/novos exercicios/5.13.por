/*5.13// Crie um programa para ler 3 valores inteiros e informar qual é o
maior deles. Pode considerar que nenhum energúmeno vai digitar valores
iguais.
Obs : FIZ O PROGRAMA ANTI-ENERGÚMENOS!! Fique tranquilo 
 */




programa {
  funcao inicio() {
    //declaração de dados 
    inteiro numero1 , numero2 , numero3

    //entrda de dados

    escreva("Digite o primeiro numero: ")
    leia(numero1)
    escreva("Digite o segundo numero: ")
    leia(numero2)
    escreva("Digite o terceiro numero: ")
    leia(numero3)

    //processamento de dados // saida de dados

    se(numero1 >numero2 e numero1 > numero3 ou numero1 >numero2 e numero2 == numero3 ou numero1>numero3 e numero1==numero2){
      escreva("O "+ numero1 + " é o maior numero digitado!!")
    }senao se (numero2 > numero1 e numero2 > numero3 ou numero2>numero1 e numero1 == numero3 ou numero2>numero3 e numero1==numero2){
      escreva("O "+ numero2 + " é o maior numero digitado!!")
    }senao se( numero3 > numero1 e numero3 > numero2 ou numero3>numero1 e numero1 == numero2 ou numero1<numero3 e numero3==numero2
    ou numero1>numero2 e numero1==numero3){
      escreva("O "+ numero3 + " é o maior numero digitado!!")
    }senao escreva("Os numeros são iguais boca mole!!")
    
      
      
      
      
      
      
      







    
  }
}
