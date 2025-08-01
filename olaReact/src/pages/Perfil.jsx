// ---------- Perfil.jsx ----------

// src/pages/Perfil.jsx
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Perfil() {
  const { usuario, atualizarUsuario, excluirUsuario } = useAuth();
  const [editando, setEditando] = useState(false);
  const [form, setForm] = useState({
    nomeUsuario: usuario?.usuario || "",
    email: usuario?.email || "",
    telefone: usuario?.telefone || "",
    sexo: usuario?.sexo || "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    atualizarUsuario(form);
    setEditando(false);
  }

  return (
    <section className="perfil">
      <h2>Meu Perfil</h2>
      {!editando ? (
        <div>
          <p><strong>Usuário:</strong> {usuario.usuario}</p>
          <p><strong>Email:</strong> {usuario.email}</p>
          <p><strong>Telefone:</strong> {usuario.telefone}</p>
          <p><strong>Sexo:</strong> {usuario.sexo}</p>
          <button onClick={() => setEditando(true)}>Editar</button>
          <button onClick={excluirUsuario} style={{ backgroundColor: "crimson", color: "white" }}>
            Excluir Conta
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="form-edicao">
          <label>Usuário:
            <input type="text" name="nomeUsuario" value={form.nomeUsuario} onChange={handleChange} required />
          </label>
          <label>Email:
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </label>
          <label>Telefone:
            <input type="text" name="telefone" value={form.telefone} onChange={handleChange} required />
          </label>
          <label>Sexo:
            <select name="sexo" value={form.sexo} onChange={handleChange} required>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
            </select>
          </label>
          <button type="submit">Salvar</button>
          <button type="button" onClick={() => setEditando(false)} className="cancelar-edicao">Cancelar</button>
        </form>
      )}
    </section>
  );
}