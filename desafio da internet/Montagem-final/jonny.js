const lista = document.getElementById("trilhas");
const trilhasView = document.getElementById("minhas-trilhas-view");
const botaoMinhasTrilhas = document.getElementById("btn-minhas-trilhas");

let indexEditando = null;

function renderizarTrilhas() {
    const atualizarClicando = JSON.parse(localStorage.getItem("eventos")) || [];
    lista.innerHTML = "";

    atualizarClicando.forEach((trilha, index) => {
        const divTrilha = document.createElement("div");
        divTrilha.classList.add("trilha-item");

        if (indexEditando === index) {
            divTrilha.innerHTML = `
        <form class="form-edicao">
          <label>Trilha: <input type="text" name="trilha" value="${trilha.trilha}" /></label><br>
          <label>Data: <input type="date" name="data" value="${trilha.data}" /></label><br>
          <label>Hora: <input type="time" name="hora" value="${trilha.hora}" /></label><br>
          <label>Ponto: <input type="text" name="ponto" value="${trilha.ponto}" /></label><br>
          <label>Vagas: <input type="number" name="vagas" value="${trilha.vagas}" /></label><br>
          <button type="submit">Salvar</button>
          <button type="button" class="cancelar-edicao">Cancelar</button>
        </form>
      `;
        } else {
            divTrilha.innerHTML = `
        <p><strong>Trilha:</strong> ${trilha.trilha}</p>
        <p><strong>Data:</strong> ${trilha.data}</p>
        <p><strong>Horário:</strong> ${trilha.hora}</p>
        <p><strong>Ponto de encontro:</strong> ${trilha.ponto}</p>
        <p><strong>Vagas disponíveis:</strong> ${trilha.vagas}</p>
        <button class="editar-btn" data-index="${index}">Editar</button>
      `;
        }

        lista.appendChild(divTrilha);
    });
}

botaoMinhasTrilhas.addEventListener("click", () => {
    trilhasView.style.display = "block";
    indexEditando = null;
    renderizarTrilhas();
});

lista.addEventListener("click", (event) => {
    if (event.target.classList.contains("editar-btn")) {
        indexEditando = parseInt(event.target.getAttribute("data-index"));
        renderizarTrilhas();
    }

    if (event.target.classList.contains("cancelar-edicao")) {
        indexEditando = null;
        renderizarTrilhas();
    }
});

lista.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const index = indexEditando;

    trilhasCadastradas[index] = {
        trilha: form.trilha.value,
        data: form.data.value,
        hora: form.hora.value,
        ponto: form.ponto.value,
        vagas: form.vagas.value,
    };

    localStorage.setItem("eventos", JSON.stringify(trilhasCadastradas));
    indexEditando = null;
    renderizarTrilhas();
});

// render inicial
renderizarTrilhas();
