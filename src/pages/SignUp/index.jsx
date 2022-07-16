import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";

//import logo from "../../assets/logo.svg";

function SignUp() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUp, loadingAuth } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();

    if (nome !== "" && email !== "" && password !== "") {
      signUp(email, password, nome);
    }
  }

  return (
    <div className="main-login">
      <div class="left-login">
        <h1>Touch Time</h1>
        <img className="left-login-image" />
      </div>

      <div className="right-login">
        <form onSubmit={handleSubmit} className="card-login">
          <h1>Cadastrar uma conta</h1>
          <div className="textfield">
            <label for="nome">Nome</label>
            <input
              type="text"
              placeholder="Seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="textfield">
            <label for="Email">E-mail</label>
            <input
              type="text"
              placeholder="email@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="textfield">
            <label for="Senha">Senha</label>
            <input
              type="password"
              placeholder="*******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-login">
            {loadingAuth ? "Cadastrando..." : "Cadastrar"}
          </button>
          <p>
            Já tem uma conta?{" "}
            <Link to="/" className="links">
              Entre
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
