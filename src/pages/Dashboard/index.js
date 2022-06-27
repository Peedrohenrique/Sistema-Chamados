import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

export default function Dashboard() {
  const { signOut, user, loading } = useContext(AuthContext);

  return (
    <div>
      <h1 className="teste">PAGINA DASHBOARD</h1>
      <br />
      <h4 className="teste">Bem vindo de voltar {user.nome}!</h4>
      <br />
      <div className="teste">
        <button onClick={() => signOut()}>
          {loading ? "Saindo..." : "Fazer logout"}
        </button>
      </div>
      <h1></h1>
    </div>
  );
}
