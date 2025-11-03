import Teste from "../models/Teste";

interface Props {
  testes: Teste[];
}

export default function TesteList({ testes }: Props) {
  return (
    <div className=" bg-slate-300  p-6 rounded-lg shadow-lg m-2">
      
      <h3 className="text-3xl font-bold mb-4 text-center">Testes Realizados</h3>
      {testes.length === 0 ? (
        <p>Nenhum teste registrado.</p>
      ) : (
        <ul>
          {testes.map((t, i) => (
            <li key={i}>
              {t.tipo} — {t.resultado}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
