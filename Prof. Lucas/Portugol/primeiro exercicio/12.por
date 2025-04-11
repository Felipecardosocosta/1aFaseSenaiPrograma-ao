 /*Criar um programa que calcule o IMC, no qual o usuário deve digitar o seu peso e altura, 
 realizar o cálculo e mostrar o resultado na tela.*/



programa {
  funcao inicio() {

    //Declaraçao de variaveis

    real imc, peso, altura

    //Entrada de dados

    escreva("Digite o seu peso : ")
    leia(peso)

    escreva("Digite sua altura : ")
    leia(altura)
   
   
    //Prossecamento de dados
    
    imc = peso / (altura * altura)
    
    
    //Saida de dados
    
    escreva("Seu IMC é : ", imc)




    
  }
}
