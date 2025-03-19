/*) Um festival de música está terceirizando a montagem da estrutura. 
A empresa contratada necessita saber uma estimativa de público para calcular a quantidade de bares e banheiros. 
O cálculo utilizado é de 1 banheiro para cada 50 pessoas e 1 bar para cada 150 pessoas. Criar um programa onde seja
 digitado o público esperado e mostrar na tela em média quantos banheiros e bares seriam necessários.*/






programa {
  funcao inicio() {

    //Declaraçao de variaveis

    inteiro publicoEsperado , mediaBanheiros, mediaBar

    //Variaveis fixas
    
    inteiro banheiro = 50 , bar = 150


    //Entrada de dados

    escreva("Digite a estimativa de quantas pessoas sao esperadas para o evento ? ")
    leia(publicoEsperado)


    //Prossecamento de dados

    mediaBar = publicoEsperado / bar
    mediaBanheiros = publicoEsperado / banheiro


    //Saida de dados

    escreva("A quandidade de bares necessario seria de :  ", mediaBar, "\nA quantidade de banheiros necessarios seria de : ", mediaBanheiros)



  }
}
