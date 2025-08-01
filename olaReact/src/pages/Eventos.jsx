// ---------- Eventos.jsx ----------

// src/pages/Eventos.jsx
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

export default function Eventos() {
  const { usuario } = useAuth();
  const [eventos, setEventos] = useState([]);
  const [novoEvento, setNovoEvento] = useState("");

  useEffect(() => {
    const eventosSalvos = JSON.parse(localStorage.getItem("EventosTrilhas")) || [];
    setEventos(eventosSalvos);
  }, []);

  function criarEvento() {
    if (!novoEvento.trim()) return;

    const evento = {
      nome: novoEvento,
      criador: usuario.usuario,
      participantes: [usuario.usuario],
    };

    const novosEventos = [...eventos, evento];
    setEventos(novosEventos);
    localStorage.setItem("EventosTrilhas", JSON.stringify(novosEventos));
    setNovoEvento("");
  }

  function participar(index) {
    const atualizados = [...eventos];
    const evento = atualizados[index];
    if (!evento.participantes.includes(usuario.usuario)) {
      evento.participantes.push(usuario.usuario);
      setEventos(atualizados);
      localStorage.setItem("EventosTrilhas", JSON.stringify(atualizados));
    }
  }

  return (
    <section className="eventos">
      <h2>Eventos</h2>
      <div className="criar-evento">
        <input
          type="text"
          placeholder="Nome do Evento"
          value={novoEvento}
          onChange={(e) => setNovoEvento(e.target.value)}
        />
        <button onClick={criarEvento}>Criar Evento</button>
      </div>

      <ul className="lista-eventos">
        {eventos.map((evento, index) => (
          <li key={index} className="evento-item">
            <h3>{evento.nome}</h3>
            <p><strong>Criador:</strong> {evento.criador}</p>
            <p><strong>Participantes:</strong> {evento.participantes.join(", ")}</p>
            {!evento.participantes.includes(usuario.usuario) && (
              <button onClick={() => participar(index)}>Participar</button>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}