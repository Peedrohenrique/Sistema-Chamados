import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./signin.css";
//import logo from "../../assets/logo.svg";
import { AuthContext } from "../../contexts/auth";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, loadingAuth } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (email !== "" && password !== "") {
      signIn(email, password);
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
          <h1>Entrar</h1>
          <div className="textfield">
            <label for="usuario">Usuário</label>
            <input
              type="text"
              placeholder="email@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="textfield">
            <label for="senha">Senha</label>
            <input
              type="password"
              placeholder="*******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-login">
            {loadingAuth ? "Carregando..." : "Acessar"}
          </button>
          <p>
            Criar uma{" "}
            <Link className="links" to="/register">
              conta
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
