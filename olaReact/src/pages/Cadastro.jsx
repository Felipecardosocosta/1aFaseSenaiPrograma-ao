// src/pages/Cadastro.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nome: "",
    cpf: "",
    dataNascimento: "",
    sexo: "",
    telefone: "",
    email: "",
    usuario: "",
    senha: "",
    cep: ""
  });
  const [mensagem, setMensagem] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const camposObrigatorios = ["nome", "cpf", "dataNascimento", "sexo", "telefone", "email", "usuario", "senha"];
    for (let campo of camposObrigatorios) {
      if (!form[campo]) {
        setMensagem("Preencha todos os campos obrigatórios");
        return;
      }
    }

    const usuarios = JSON.parse(localStorage.getItem("CadastroUser")) || [];

    const jaExiste = usuarios.find(u => u.usuario === form.usuario || u.email === form.email || u.cpf === form.cpf);
    if (jaExiste) {
      setMensagem("Usuário, e-mail ou CPF já cadastrado");
      return;
    }

    const novoUsuario = {
      ...form,
      evento: false,
      historico: [],
      avaliacoes: [],
      avaliacaoUser: "10/10"
    };

    usuarios.push(novoUsuario);
    localStorage.setItem("CadastroUser", JSON.stringify(usuarios));
    setMensagem("");
    navigate("/login");
  }

  return (
    <section className="conteiner-cadastro">
      <h1 className="h1-cadastro">Cadastro</h1>
      <form className="formulario-cadastro" onSubmit={handleSubmit}>
        <div className="parte1">
          <label>Nome:
            <input type="text" name="nome" value={form.nome} onChange={handleChange} required />
          </label>
          <label>CPF:
            <input type="text" name="cpf" value={form.cpf} onChange={handleChange} maxLength="11" required />
          </label>
          <label>Data de Nascimento:
            <input type="date" name="dataNascimento" value={form.dataNascimento} onChange={handleChange} required />
          </label>
          <p>Sexo:</p>
          <label><input type="radio" name="sexo" value="Masculino" onChange={handleChange} /> Masculino</label>
          <label><input type="radio" name="sexo" value="Feminino" onChange={handleChange} /> Feminino</label>
          <label>Celular:
            <input type="tel" name="telefone" value={form.telefone} onChange={handleChange} maxLength="11" required />
          </label>
          <label>Email:
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </label>
        </div>
        <div className="parte2">
          <label>Reside em Florianópolis?
            <select name="cep" value={form.cep} onChange={handleChange}>
              <option value="">Não</option>
              <option value="Sim">Sim</option>
            </select>
          </label>
          <label>Usuário:
            <input type="text" name="usuario" value={form.usuario} onChange={handleChange} required />
          </label>
          <label>Senha:
            <input type="password" name="senha" value={form.senha} onChange={handleChange} required />
          </label>
          {mensagem && <p className="cont-infosLoginCadas">{mensagem}</p>}
          <button className="buttonCadastro" type="submit">Cadastrar</button>
          <p>Você já possui cadastro? <a href="/login" className="linkLoCa">Logar</a></p>
        </div>
      </form>
    </section>
  );
}
