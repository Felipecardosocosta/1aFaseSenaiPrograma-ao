/*5.14// Crie um programa para ler as medidas dos lados de um triângulo e
descobrir se ele é equilátero, isóceles ou escaleno. Sendo que:
- Triângulo equilátero: tem os 3 lados iguaizinhos;
- Triângulo isóceles: possui dois lados iguais, o outro é diferentão;
- Triângulo escaleno: todos os lados são diferentes. */



programa {
  funcao inicio() {

    //desclaraçao de variaveis

    inteiro lado1 , lado2 , lado3 

    //Entrada de dados

    escreva("Digite o Primeiro lado: ")
    leia(lado1)
    escreva("Digite o Segundo lado: ")
    leia(lado2)
    escreva("Digite o Terceiro lado: ")
    leia(lado3)

    //Processamento de dados

    se(lado1 == lado2 e lado1 == lado3){
      escreva("É um triângulo equilátero")
    }senao se (lado1 != lado2 e lado1 != lado3 e lado2 !=lado3){
      escreva("É um triângulo escaleno")
    }senao escreva("É um triângulo isóceles")


    
    
  }
}
