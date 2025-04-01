/*5.9// Tendo como entrada a altura (em metros) e o gênero (1: feminino;
2: masculino) de uma pessoa, construa um programa que calcule e
apresente seu peso ideal utilizando as fórmulas abaixo:
- para mulheres: (62.1 * altura) – 44.7
- para homens: (72.7 * altura) – 58
 */



programa {
  funcao inicio() {

    //declaraçao de variaveis
    real altura, pesoIdeal
    inteiro genero

    //entrada de dados
    escreva("Digite sua altura: ")
    leia(altura)
    escreva("\n1-Masculino\n2-Feminino\nQual é o seu gênero: ")
    leia (genero)
    limpa()
    // processamento de dados 

    se(genero == 1 ){
    pesoIdeal = (72.7 * altura) - 58
    }senao {
      pesoIdeal = (62.1 * altura) - 44.7
    }

    //saida de dados

    escreva("Seu peso ideal é de: "+pesoIdeal+" kg\n")


    
  }
}
