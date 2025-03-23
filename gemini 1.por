/*Peça ao usuário para digitar dois números.
Pergunte ao usuário qual operação ele deseja realizar (+, -, *, /).
Use uma estrutura condicional (SE/SENÃO) para realizar a operação escolhida e exibir o resultado.*/


programa {
  funcao inicio() {

    //Declaração de variaveis
    
    real n1, n2 ,operacao, resultado
    
    //Entrada dados

    escreva("digite um numero : ")
    leia(n1)

    escreva("digite o segundo numero")
    leia(n2)

    escreva("digite \n1 - para soma \n2 - para subtração \n3 - para multiplicação \n4 - para divição \n")
    leia(operacao)
     
    // processamento de dados // e saida de dados

    se (operacao == 1){
      resultado = n1+n2
      escreva("o resultado é : ", resultado)
    
    }senao se(operacao == 2){
      resultado = n1-n2
      escreva("o resultado é : ", resultado)
      
    }senao se(operacao == 3){
      resultado = n1 * n2
      escreva("o resultado é : ", resultado)

    }senao se(operacao == 4){
      resultado = n1/n2
      escreva("o resultado é : ", resultado)
    }senao se (operacao > 4)
    escreva("Nao foi possivel identificar qual operação voce deseja fazer")
    }

    







    
  }
}
