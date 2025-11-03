import Etapa from "../models/Etapa";

interface Props {
  etapas: Etapa[];
}

export default function EtapaList({ etapas }: Props) {
  return (
    <div className=" bg-slate-300  p-6 rounded-lg shadow-lg m-2">
      <h3 className="text-3xl font-bold mb-4 text-center">Etapas de Produção</h3>
      {etapas.length === 0 ? (
        <p>Nenhuma etapa cadastrada.</p>
      ) : (
        <ul>
          {etapas.map((e, i) => (
            <li key={i}>
              {e.nome} — {e.status} — {e.prazo} dias
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
