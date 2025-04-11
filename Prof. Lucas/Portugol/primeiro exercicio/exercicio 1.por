//Programar as seguintes entradas de dados de um cliente:
 //Nome, idade, nacionalidade, endereço. Após digitados os dados, mostrar na tela a seguinte mensagem 
 //"Cliente [Nome], [idade] anos, [nacionalidade], reside no endereço [endereço]." 
 //Exemplo: Cliente Lucas, 29 anos, brasileiro, 
 //reside no endereço Rua Victor Meirelles, 281, Centro, Florianópolis.

programa {
  funcao inicio() {
    //variaves
    
    cadeia nome , nacionalidade , endereco
    inteiro idade 

    //entrada de dados

    escreva("digite seu nome : ")
    leia(nome)

    escreva("Qual sua idade? :")
    leia(idade)

    escreva("Qual sua nacionalidade? :")
    leia(nacionalidade)

    escreva("Endereço em qual reside : ")
    leia(endereco)

    // Saída de Dados

    escreva("Cliente ", nome, ", " , idade , " anos, ",nacionalidade , ", reside no endereço  ", endereco )






  }
}
