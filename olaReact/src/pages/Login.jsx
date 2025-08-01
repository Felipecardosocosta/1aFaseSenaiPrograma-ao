import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [usuarioLogin, setUsuarioLogin] = useState("");
  const [senhaLogin, setSenhaLogin] = useState("");
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();

    if (!usuarioLogin || !senhaLogin) {
      setMensagem("Preencha todos os campos");
      return;
    }

    const sucesso = login(usuarioLogin, senhaLogin);
    if (sucesso) {
      navigate("/trilhas");
    } else {
      setMensagem("Usuário ou senha incorretos");
    }
  }

  return (
    <section className="conteiner-login">
      <form className="formulario-login" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="conteiner-usuario-login">
          <label htmlFor="usuarioLogin">Usuário:</label>
          <input
            type="text"
            id="usuarioLogin"
            value={usuarioLogin}
            onChange={(e) => setUsuarioLogin(e.target.value)}
            autoComplete="username"
          />
        </div>
        <div className="conteiner-senha-login">
          <label htmlFor="senhaLogin">Senha:</label>
          <input
            type="password"
            id="senhaLogin"
            value={senhaLogin}
            onChange={(e) => setSenhaLogin(e.target.value)}
            autoComplete="current-password"
          />
        </div>
        {mensagem && <p className="cont-infosLoginCadas">{mensagem}</p>}
        <div className="botaoLogar">
          <button className="button-logar" type="submit">Entrar</button>
          <p>
            Você não possui cadastro? <a href="/cadastro" className="linkLoCa">Cadastrar</a>
          </p>
        </div>
      </form>
    </section>
  );
}
