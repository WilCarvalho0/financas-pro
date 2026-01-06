export function Cadastro({ onCadastro }) {
return (
<div>
<h2>Cadastro</h2>
<input placeholder="Nome" />
<input placeholder="E-mail" />
<input placeholder="Senha" type="password" />
<button onClick={onCadastro}>Cadastrar e entrar</button>
</div>
);
}