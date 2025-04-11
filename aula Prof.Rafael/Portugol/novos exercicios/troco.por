// Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto. 
//As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.

// Entrada
// O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).

// Saída
// Imprima o valor lido e, em seguida, a quantidade mínima de notas de cada tipo necessárias, conforme o exemplo fornecido. 
//Não esqueça de imprimir o fim de linha após cada linha, caso contrário seu programa apresentará a mensagem: “Presentation Error”.

programa {
  funcao inicio() {

    inteiro valor , notas100 ,notas50 , notas20, notas10, notas5 , notas2 , notas1 , resto

    escreva("digite o valor: ")
    leia(valor)

    notas100 = valor / 100
    resto = valor % 100

    notas50 = resto / 50
    resto = resto % 50

    notas20  = resto / 20
    resto = resto % 20

    notas10  = resto / 10
    resto = resto % 10

    notas5  = resto / 5
    resto = resto % 5

    notas2  = resto / 2
    resto = resto % 2
    

    notas1 = resto 
    


    escreva(notas100 ," nota(s) de R$ 100,00\n" )

    escreva(notas50, " nota(s) de R$ 50,00\n")

    escreva(notas20," nota(s) de R$ 20,00\n")

    escreva(notas10," nota(s) de R$ 10,00\n")

    escreva(notas2," nota(s) de R$ 2,00\n")

    escreva(notas1, "nota(s) de R$ 1,00")




    

    
  }
}
