/*Os leões baios são animais territoriais. Seu território compreende cerca de 320km² por indivíduo,
exceto quando formam casais, nesse caso o casal costuma dominar uma área de 400km², juntos.
Considerando que existam 9 fêmeas e 5 machos em determinada reserva ambiental. Elaborar um programa
no qual você deve digitar quantos casais (dados de pesquisa de campo) existem dentre esse total e mostrar na tela a soma geral
de área dominada, incluindo todos indivíduos.*/



programa {
  funcao inicio() {

    //Declaraçao de variaveis

    inteiro somaGeralArea, casalQuantidade, totalDeLeoes


    //Declaraçao de variaveis fixas
    
    inteiro umLeao = 320, casal = 400 , femeas = 9 , machos = 5

    
    //Entrada de dados

    escreva("Digite quantos casais tem na reserva : ")
    leia(casalQuantidade)

    
    //Prossecamento de dados
    
    totalDeLeoes = femeas + machos - (casalQuantidade * 2)

    somaGeralArea = totalDeLeoes * umLeao + casalQuantidade * casal

    //Saida de dados

    escreva("A area total dominada é de : ",somaGeralArea," Km²")


    
  }
}
