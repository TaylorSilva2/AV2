import Funcionario from "../models/Funcionario";

interface Props {
  funcionarios: Funcionario[];
}

export default function FuncionarioList({ funcionarios }: Props) {
  return (
    <div className=" bg-slate-300  p-6 rounded-lg shadow-lg m-2">
      <h3 className="text-3xl font-bold mb-4 text-center">Funcionários Cadastrados</h3>
      {funcionarios.length === 0 ? (
        <p>Nenhum funcionário cadastrado.</p>
      ) : (
        <ul>
          {funcionarios.map((f) => (
            <li key={f.id}>
              {f.nome} — {f.nivel} ({f.usuario})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
