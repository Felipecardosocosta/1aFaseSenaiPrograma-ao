/**5.11// Crie um programa para ler o número de lados de um polígono
regular e a medida do lado em cm. Calcular e mostrar o seguinte:
- Se o número de lados for 3, escrever “TRIÂNGULO” e o valor da área;
- Se o número de lados for 4, escrever “QUADRADO” e o valor da área;
- Se o número de lados for 5, escrever “PENTÁGONO”. 
5.12// Ao programa anterior, acrescente:
- “NÃO É UM POLÍGONO”, caso o número de lados seja menor que 3;
- “POLÍGONO NÃO IDENTIFICADO” caso seja maior que 5.
*/


programa {
  funcao inicio() {
    
    inteiro numeroLados, tamanhoLado,area

    escreva("Qual o numero de lados: ")
    leia(numeroLados)

    se (numeroLados <3 ){ 
      escreva ("Não é um Polígono!!")
      
      
     }senao 
      se (numeroLados >5 ){
      
      escreva("Polígono não identificado!!")
    }senao 
      se(numeroLados <5 ){
      escreva("Qual o tamanho dos lados: ")
      leia(tamanhoLado)
    }

    
    se(numeroLados== 3){
      area = (tamanhoLado * tamanhoLado) / 2
      escreva("Triangolo!!\nArea: "+area + " cm²")

    }senao{
      se(numeroLados == 4){
      area = (tamanhoLado * tamanhoLado) 
      escreva("Quadrado!!\nArea: "+area + " cm²")

      }senao{
        se (numeroLados==5){
          escreva("É um PENTÁGONO")
        
        }
      


      }

      


    }

  }
}
