export function Dashboard({ setTela }) {
return (
<div style={{ padding: 24 }}>
<h1>Dashboard</h1>
<div style={{ display: "flex", gap: 12 }}>
<Button label="Portfólio" onClick={() => setTela("portfolio")} />
<Button label="Ativos" onClick={() => setTela("ativos")} />
<Button label="Alertas" onClick={() => setTela("alertas")} />
<Button label="IA" onClick={() => setTela("ia")} />
</div>
</div>
);
}