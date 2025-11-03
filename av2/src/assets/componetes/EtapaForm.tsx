import { useState } from "react";
import Etapa, { StatusEtapa } from "../models/Etapa";

interface Props {
  onAdd: (e: Etapa) => void;
}

export default function EtapaForm({ onAdd }: Props) {
  const [nome, setNome] = useState("");
  const [prazo, setPrazo] = useState(0);
  const [status, setStatus] = useState<StatusEtapa>(StatusEtapa.PENDENTE);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(new Etapa(nome, prazo, status, []));
    setNome("");
    setPrazo(0);
  };

  return (
    <form onSubmit={handleSubmit} className=" bg-slate-300  p-6 rounded-lg shadow-lg m-2">
      <h3 className="text-3xl font-bold mb-4 text-center">Cadastrar Etapa</h3>
      <input placeholder="Nome da etapa" value={nome} onChange={(e) => setNome(e.target.value)} className="bg-white mb-2 p-2 rounded m-2" />
      <input
        type="number"
        placeholder="Prazo (dias)"
        value={prazo}
        onChange={(e) => setPrazo(Number(e.target.value))}
        className="bg-white mb-2 p-2 rounded m-2"
      />
      <select value={status} onChange={(e) => setStatus(e.target.value as StatusEtapa)} className="bg-white mb-2 p-2 rounded m-2">
        <option value={StatusEtapa.PENDENTE}>Pendente</option>
        <option value={StatusEtapa.ANDAMENTO}>Em Andamento</option>
        <option value={StatusEtapa.CONCLUIDA}>Concluída</option>
      </select>
      <button className="bg-slate-500 text-white p-2 rounded hover:bg-sky-600" type="submit">Adicionar</button>
    </form>
  );
}
