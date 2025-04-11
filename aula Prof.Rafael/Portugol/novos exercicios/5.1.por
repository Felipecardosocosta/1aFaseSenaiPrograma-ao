/*5.1// Crie um programa que execute a validação de
 uma senha digitada
pelo usuário. Caso ele digite a senha “1234” devemos 
informar a ele
“acesso permitido”. Para qualquer outra senha digitada,
 informar “acesso
negado”*/




programa {
  funcao inicio() {

    
    //Declaraçao de variaveis
    inteiro senha = 1234, senhaDigitada

    //Entrada de dados
    
    
    escreva("Digite a senha: ")
    leia(senhaDigitada)

    
    //Prossecamento de dados

    se(senha == senhaDigitada){

      escreva("Acesso permitido!!")
      
    }senao escreva("Acesso negado!!")

    /* outra opçao
    se(senha == senhaDigitada){

      escreva("Acesso permitido!!")
      }
    se (senha !=senhaDigitada){
      escreva("Acesso negado!!")
    
    }  

    */


    
    
    
  }
}
