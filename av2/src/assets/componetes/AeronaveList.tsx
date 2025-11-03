import Aeronave from "../models/Aeronave";

interface Props {
  aeronaves: Aeronave[];
}

export default function AeronaveList({ aeronaves }: Props) {
  return (
    <div className=" bg-slate-300  p-6 rounded-lg shadow-lg m-2">
      <h3 className="text-3xl font-bold mb-4 text-center">Lista de Aeronaves</h3>
      {aeronaves.length === 0 ? (
        <p>Nenhuma aeronave cadastrada.</p>
      ) : (
        <ul>
          {aeronaves.map((a) => (
            <li key={a.codigo}>
              <b>{a.modelo}</b> ({a.tipo}) — {a.capacidade} lugares /{" "}
              {a.alcance} km
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
