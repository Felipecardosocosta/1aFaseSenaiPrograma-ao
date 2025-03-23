/*Peça ao usuário para digitar sua idade.
Com base na idade, classifique-o em uma das seguintes categorias:
0-12 anos: Criança
13-17 anos: Adolescente
18-59 anos: Adulto
60 anos ou mais: Idoso
*/


programa {
  funcao inicio() {

    //Declaraçao de variaveis

    inteiro idade , crianca = 12 , adolescente=18 , adulto=60 , idoso = 60
    
    //Entrada de dados
    escreva("digite sua idade : ")
    leia(idade)


    //Processamento de dados // saida de dados
    se (idade < crianca){
      escreva("Voce é uma criança \n")

    }senao se ( idade < adolescente ){
      escreva("voce é um adolescente \n")
    
    }senao se (idade < adulto) {
      escreva(" voce é um adulto \n")
      
      }senao se (idade >=idoso){
        escreva("voce é um idoso")
      }
      
    
    








    
  }
}
