/*5.2// Mano Juca bateu a cabeça e está com problemas de
raciocínio...
Está analisando dois números há horas e não consegue
descobrir qual deles é o maior. Vamos ajuda-lo!
Crie um algoritmo que leia dois números A e B e imprima o
maior deles. */



programa {
  funcao inicio() {

    //Declaraçao de variaveis
    real numero1,numero2

    //Entrada de dados
    escreva("digite o numero: ")
    leia(numero1)
    
    escreva("digite outro numero: ")
    leia(numero2)
    
    //Prossecamento de dados //Saida de dados

    se(numero1>numero2){
      escreva("o primeiro numero é maior que o segundo!!! ")
    }
    se(numero1<numero2){
      escreva("o segundo numero é maior que o primeiro!!")
    }

    se(numero1 == numero2){
      escreva("os numeros sao iguais o boca-aberta!!! ")
    }
    
    
    
  }
}
