import { useState } from "react";
import Teste, { TipoTeste, ResultadoTeste } from "../models/Teste";
interface Props {
  onAdd: (t: Teste) => void;
}

export default function TesteForm({ onAdd }: Props) {
  const [tipo, setTipo] = useState<TipoTeste>(TipoTeste.ELETRICO);
  const [resultado, setResultado] = useState<ResultadoTeste>(ResultadoTeste.APROVADO);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(new Teste(tipo, resultado));
  };

  return (
    <form onSubmit={handleSubmit}  className=" bg-slate-300  p-6 rounded-lg shadow-lg m-2">
      <h3 className="text-3xl font-bold mb-4 text-center">Registrar Teste</h3>
      <select value={tipo} onChange={(e) => setTipo(e.target.value as TipoTeste)} className="bg-white mb-2 p-2 rounded m-2">
        <option value={TipoTeste.ELETRICO}>Elétrico</option>
        <option value={TipoTeste.HIDRAULICO}>Hidráulico</option>
        <option value={TipoTeste.AERODINAMICO}>Aerodinâmico</option>
      </select>
      <select value={resultado} onChange={(e) => setResultado(e.target.value as ResultadoTeste)} className="bg-white mb-2 p-2 rounded m-2">
        <option value={ResultadoTeste.APROVADO}>Aprovado</option>
        <option value={ResultadoTeste.REPROVADO}>Reprovado</option>
      </select>
      <button className="bg-slate-500 text-white p-2 rounded hover:bg-sky-600" type="submit">Registrar</button>
    </form>
  );
}
