import { useState } from "react";
import Aeronave, { TipoAeronave } from "../models/Aeronave";

interface Props {
  onAdd: (a: Aeronave) => void;
}

export default function AeronaveForm({ onAdd }: Props) {
  const [codigo, setCodigo] = useState("");
  const [modelo, setModelo] = useState("");
  const [tipo, setTipo] = useState<TipoAeronave>(TipoAeronave.COMERCIAL);
  const [capacidade, setCapacidade] = useState(0);
  const [alcance, setAlcance] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nova = new Aeronave(codigo, modelo, tipo, capacidade, alcance);
    onAdd(nova);
    setCodigo("");
    setModelo("");
    setCapacidade(0);
    setAlcance(0);
  };

  return (
    
    <form onSubmit={handleSubmit} className=" bg-slate-300  p-6 rounded-lg shadow-lg m-2">
      <h3 className="text-3xl font-bold mb-4 text-center ">Adicionar Aeronave</h3>
      <input
        placeholder="Código"
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
        className="bg-white mb-2 p-2 rounded m-2"
      />
     
      <select
        value={tipo}
        onChange={(e) => setTipo(e.target.value as TipoAeronave)}
        className="bg-white mb-2 p-2 rounded m-2"
      >
        <option value={TipoAeronave.COMERCIAL}>Comercial</option>
        <option value={TipoAeronave.MILITAR}>Militar</option>
      </select>
      <input
        type="number"
        placeholder="Capacidade"
        value={capacidade}
        onChange={(e) => setCapacidade(Number(e.target.value))}
        className="bg-white mb-2 p-2 rounded-md m-2"
      />
      <input
        type="number"
        placeholder="Alcance (km)"
        value={alcance}
        onChange={(e) => setAlcance(Number(e.target.value))}
        className="bg-white mb-2 p-2 rounded-md m-2"
      />
      <button className="bg-slate-500 text-white p-2 rounded hover:bg-sky-600" type="submit" >Cadastrar</button>
    </form>
  );
}
