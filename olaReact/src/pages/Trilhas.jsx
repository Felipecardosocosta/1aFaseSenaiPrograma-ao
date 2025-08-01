// ---------- Trilhas.jsx ----------

// src/pages/Trilhas.jsx
import { useState, useEffect } from "react";

const trilhasMock = [
  {
    nome: "Trilha Norte 1",
    regiao: "Norte",
    distancia: "45Km",
    tempo: "03h30",
    relevo: "Irregular",
    elevacao: "50m",
    img: "Icones/image.svg",
  },
  {
    nome: "Trilha Sul 2",
    regiao: "Sul",
    distancia: "12Km",
    tempo: "01h30",
    relevo: "Plano",
    elevacao: "10m",
    img: "Icones/image.svg",
  },
];

export default function Trilhas() {
  const [trilhas, setTrilhas] = useState([]);
  const [regiaoSelecionada, setRegiaoSelecionada] = useState("");
  const [trilhaAtiva, setTrilhaAtiva] = useState(null);

  useEffect(() => {
    setTrilhas(trilhasMock);
  }, []);

  const trilhasFiltradas = regiaoSelecionada
    ? trilhas.filter((t) => t.regiao === regiaoSelecionada)
    : trilhas;

  return (
    <section className="trilhas">
      <h2>Trilhas</h2>
      <div className="filtros">
        {['Norte', 'Central', 'Leste', 'Sul'].map((reg) => (
          <button key={reg} onClick={() => setRegiaoSelecionada(reg)}>
            {reg}
          </button>
        ))}
        <button onClick={() => setRegiaoSelecionada("")}>Todas</button>
      </div>

      <div className="lista-trilhas">
        {trilhasFiltradas.map((trilha, index) => (
          <div key={index} className="trilha-item" onClick={() => setTrilhaAtiva(trilha)}>
            <h3>{trilha.nome}</h3>
            <img src={trilha.img} alt={trilha.nome} width={100} />
          </div>
        ))}
      </div>

      {trilhaAtiva && (
        <div className="detalhes-trilha">
          <h3>{trilhaAtiva.nome}</h3>
          <p><strong>Região:</strong> {trilhaAtiva.regiao}</p>
          <p><strong>Distância:</strong> {trilhaAtiva.distancia}</p>
          <p><strong>Tempo estimado:</strong> {trilhaAtiva.tempo}</p>
          <p><strong>Relevo:</strong> {trilhaAtiva.relevo}</p>
          <p><strong>Elevação:</strong> {trilhaAtiva.elevacao}</p>
          <button onClick={() => setTrilhaAtiva(null)}>Fechar</button>
        </div>
      )}
    </section>
  );
}