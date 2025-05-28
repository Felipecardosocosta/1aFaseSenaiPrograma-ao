function chamarCadastro() {
    document.getElementById("ListaPrincipal").style.display = "none"
    document.getElementById("ListaCadastro").style.display = "flex"

}
function chamarLista() {
    document.getElementById("ListaPrincipal").style.display = "flex"
    document.getElementById("ListaCadastro").style.display = "none"

}

function editarCont(id) {
    
    let li = document.getElementById(`posiç${id}`)

    let conteudoAntigo = li.innerText

    li.innerHTML = `<label for="nome${id}"></label>

            <input type="text" name="nome${id}" id="nome${id}" value =" ${conteudoAntigo}"> 

            <svg class="confirme" onclick="comfirmaEdit(${id})" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M243.28,68.24l-24-23.56a16,16,0,0,0-22.59,0L104,136.23l-36.69-35.6a16,16,0,0,0-22.58.05l-24,24a16,16,0,0,0,0,22.61l71.62,72a16,16,0,0,0,22.63,0L243.33,90.91A16,16,0,0,0,243.28,68.24ZM103.62,208,32,136l24-24a.6.6,0,0,1,.08.08l42.35,41.09a8,8,0,0,0,11.19,0L208.06,56,232,79.6Z"></path></svg> 
            <svg class="negativo" onclick="negativoEdit(${id},'${conteudoAntigo}')" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path></svg>`

}
function negativoEdit(id, cont) {
    const li = document.getElementById(`${id}`)
    li.innerHTML = `${cont}
                    <svg class="editar" onclick="editarCont(${id})" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000"
                        viewBox="0 0 256 256">
                        <path
                            d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM51.31,160,136,75.31,152.69,92,68,176.68ZM48,179.31,76.69,208H48Zm48,25.38L79.31,188,164,103.31,180.69,120Zm96-96L147.31,64l24-24L216,84.68Z">
                        </path>
                    </svg>
                    <svg class="deletar" onclick="deletar(${id})" width="32" height="32" fill="#000000"
                        viewBox="0 0 256 256">
                        <path
                            d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z">
                        </path>
                    </svg>`

}

function comfirmaEdit(id) {

    const li = document.getElementById(`posiç${id}`)
    const novoitem = document.getElementById(`nome${id}`).value

    li.innerHTML = `${novoitem}
                    <svg class="editar" onclick="editarCont(${id})" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000"
                        viewBox="0 0 256 256">
                        <path
                            d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM51.31,160,136,75.31,152.69,92,68,176.68ZM48,179.31,76.69,208H48Zm48,25.38L79.31,188,164,103.31,180.69,120Zm96-96L147.31,64l24-24L216,84.68Z">
                        </path>
                    </svg>
                    <svg class="deletar" onclick="deletar(${id})" width="32" height="32" fill="#000000"
                        viewBox="0 0 256 256">
                        <path
                            d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z">
                        </path>
                    </svg>
                    `
}
function deletar(id) {

    const li = document.getElementById(`posiç${id}`)
    const lista = document.getElementById("minhaLista")
    console.log(lista);
    console.log(li);
    lista.removeChild(li)

}

const item = document.getElementById("nome")
item.addEventListener("keypress", function enter(evet) {
    if (evet.key == "Enter") {
        console.log(evet.target.value)

        adicionarItem()

    }
})

let contId = 0
function adicionarItem() {

    const lista = document.getElementById("minhaLista")
    contId++
    const li = document.createElement("li")
    li.setAttribute("id", `posiç${contId}`)
    li.innerHTML = `
                    ${item.value}
                    <svg class="editar" onclick="editarCont(${contId})" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000"
                        viewBox="0 0 256 256">
                        <path
                            d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM51.31,160,136,75.31,152.69,92,68,176.68ZM48,179.31,76.69,208H48Zm48,25.38L79.31,188,164,103.31,180.69,120Zm96-96L147.31,64l24-24L216,84.68Z">
                        </path>
                    </svg>

                    <svg class="deletar" onclick="deletar(${contId})" width="32" height="32" fill="#000000"
                        viewBox="0 0 256 256">
                        <path
                            d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z">
                        </path>
                    </svg>
                `
    lista.appendChild(li)
    item.value = ""

}
