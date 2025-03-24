/*media ponderada nota A peso 3,5 e a nota B peso 7.5*/



programa {
  funcao inicio() {

    real nota1, nota2 , pesoNota1 =  3.5 , pesoNota2 = 7.5 , mediaPonderadaNota ,mediaPonderadaPeso

    escreva("digite a nota da primeira prova : ")
    leia(nota1)

    escreva("digite a nota da segunda prova : ")
    leia(nota2)

    mediaPonderadaNota= (nota1 * pesoNota1) + (nota2 * pesoNota2)

    mediaPonderadaPeso = mediaPonderadaNota / (pesoNota1 + pesoNota2)



    escreva("sua media ponderada é de : ", mediaPonderadaPeso)
    
  }
}
