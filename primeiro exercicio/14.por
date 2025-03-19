/* Em uma fábrica de reciclagem de materiais, cada 10kg de plástico rendem R$2,00 cada 30kg de papel rendem R$3,00 
e cada 50kg de metal rendem R$5,00. Perguntar ao usuário a quantidade (kg) de cada material que deseja entregar na fábrica
 e mostrar o total que receberá em reais.*/



programa {
  funcao inicio() {
    //Declaraçao de variaveis
    
    real plasticoKg , papelKg ,metalKg , plasticoReais = 0.2, papelReais = 0.1 , metalReais = 0.1  
    real resultadoPapel, resultatoMetal,resultadoPlastico, totalReais
  
    
    //Entrada de dados
    
    escreva("Por favor informar quantos kg de plantico foram entregues : ")
    leia(plasticoKg)
    
    escreva("Por favor informar quantos kg de papel foram entregues : ")
    leia(papelKg)
    
    escreva("Por favor informar quantos kg de metal foram entregues : ")
    leia(metalKg)
    
    
    //Prossecamento de dados

     resultadoPlastico= plasticoKg * plasticoReais

     resultadoPapel= papelKg * papelReais

     resultatoMetal= metalKg * metalReais

     totalReais = resultadoPapel + resultadoPlastico + resultatoMetal

   
    //Saida de dados

    escreva("O valor total que você deve receber é : ", totalReais,"R$")




  }
}
