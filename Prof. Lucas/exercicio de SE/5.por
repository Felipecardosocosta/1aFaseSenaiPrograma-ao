/*Crie um programa que peça ao usuário para digitar três notas individualmente (uma por vez), 
faça a média e caso a média seja igual ou maior que 7, mostre uma mensagem "Aprovado!" */


programa {
  funcao inicio() {

    //Declaraçao de variaveis

    real nota1,nota2,nota3,media


    //Entrada de dados

    escreva("digite a primeira nota : ")
    leia(nota1)
    escreva("digite a segunda nota : ")
    leia(nota2)
    escreva("digite a terceira nota : ")
    leia(nota3)


    //Prossecamento de dados

    media = (nota1 + nota2 + nota3) / 3

  
    
    
    //Saida de dados
    se(media >= 7){

      escreva("voce foi aprovado")


    }



    
  }
}
