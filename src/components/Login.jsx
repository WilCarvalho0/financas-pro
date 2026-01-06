export function Login({ onLogin, goCadastro }) {
return (
<div style={{ maxWidth: 400, margin: "80px auto" }}>
<h2>Finanças PRO</h2>
<Input placeholder="E-mail" />
<Input placeholder="Senha" type="password" />
<Button label="Entrar" onClick={onLogin} />
<p onClick={goCadastro} style={{ cursor: "pointer" }}>Criar conta</p>
</div>
);
}