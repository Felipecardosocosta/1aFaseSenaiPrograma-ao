const map = L.map('map').setView([-27.6, -48.5], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    const trilhas = [
      { nome: "Gravatá", coords: [-27.5985, -48.4255] },
      { nome: "Lagoinha do Leste", coords: [-27.7740, -48.5010] },
      { nome: "Costa da Lagoa", coords: [-27.5789, -48.4550] },
      { nome: "Barra da Lagoa", coords: [-27.5756, -48.4333] },
      { nome: "Morro do Lampião", coords: [-27.6040, -48.4710] },
      { nome: "Galheta", coords: [-27.5815, -48.4278] },
      { nome: "Saquinho", coords: [-27.7782, -48.5045] },
      { nome: "Santinho", coords: [-27.4428, -48.3794] },
      { nome: "Morro das Aranhas", coords: [-27.4410, -48.3750] },
      { nome: "Trilhas de Criança", coords: [-27.5310, -48.5160] }
    ];

    trilhas.forEach(trilha => {
      L.marker(trilha.coords)
        .addTo(map)
        .bindPopup(`<button onclick='alert("${trilha.nome}")'>${trilha.nome}</button>`);
    });
        function mostrar(secao) {
            const conteudo = document.getElementById("conteudo");
            if (secao === 'trilhas') {
                conteudo.innerHTML = '<h2>Trilhas</h2><p>Veja as trilhas disponíveis em Floripa!</p>';
            } else if (secao === 'eventos') {
                conteudo.innerHTML = '<h2>Eventos</h2><p>Eventos marcados com outros trilheiros.</p>';
            } else if (secao === 'criar') {
                conteudo.innerHTML = '<h2>Criar Evento</h2><p>Preencha os detalhes para organizar um novo evento.</p>';
            } else if (secao === 'perfil') {
                conteudo.innerHTML = '<h2>Perfil</h2><p>Veja ou edite seu perfil de trilheiro.</p>';
            }
        }