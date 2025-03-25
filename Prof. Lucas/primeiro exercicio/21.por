/* As baleias da Groenlândia estão entre os animais que vivem mais tempo na Terra, 
em média 200 anos. A reprodução se dá a cada 4 anos, tendo somente 1 filhote por vez. 
Programar um sistema que calcule o total de filhotes ao longo da vida e a média de filhotes de uma baleia dessa espécie por década.*/




programa {
  funcao inicio() {
    

    //Declaraçao de variaveis

    inteiro mediaFilhotesTotal,  anosBaleia
    real filhotesPorDecada 

    //Declaraçao de variaveis fixas

    inteiro  filhote = 1 , anos = 4, decada = 10

    
    //Entrada de dados

    escreva("qual a idade media que a baleia viveu : ")
    leia(anosBaleia)

    
    //Prossecamento de dados

    mediaFilhotesTotal = anosBaleia / anos
    filhotesPorDecada = decada / anos

    //Saida de dados

    escreva("A balei teve uma media de filhotes em ", anosBaleia , " de : ", mediaFilhotesTotal, " filhotes","\nA media de filhotes por decada foi de : ", filhotesPorDecada)



  }
}
