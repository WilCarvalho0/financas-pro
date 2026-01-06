import { useState } from "react";


export default function App() {
const [tela, setTela] = useState("login");


if (tela === "login") return <Login onLogin={() => setTela("dashboard")} goCadastro={() => setTela("cadastro")} />;
if (tela === "dashboard") return <Dashboard setTela={setTela} />;
if (tela === "portfolio") return <Portfolio />;
if (tela === "ativos") return <Ativos />;
if (tela === "ia") return <RecomendacoesIA />;


return null;
}