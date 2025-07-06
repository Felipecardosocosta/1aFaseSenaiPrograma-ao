class ListaTarefas{
    constructor(){
        this.lista =this.pesquisar()
        

    }
    salva(){
        localStorage.setItem("ListaTarefas", JSON.stringify(this.lista))
    }
    pesquisar(){
        return JSON.parse(localStorage.getItem("ListaTarefas")) || [{nome:'Estudar',checked: false},{nome:'Praticar',checked: false},{nome:'projeto',checked: false},{nome:'deploy',checked: false},{nome:'Revisar',checked: false}]
    }
    onClick(ondeClicou){

        let check = document.getElementById(ondeClicou).checked
        this.modificarChecked(ondeClicou,check)
    }
    modificarChecked(nome,condiçao){

        let lista = this.pesquisarLista(nome)
        lista.checked = condiçao
        this.salva()
    }
    pesquisarLista(nome){
        return this.lista.find(tarefa => tarefa.nome=== nome)
    }
    atualizandoDasdosEstaticos(){
        this.lista.forEach(element => {
            if(element.checked) document.getElementById(element.nome).checked = element.checked
        })
    }
}

let lista = new ListaTarefas()

lista.atualizandoDasdosEstaticos()