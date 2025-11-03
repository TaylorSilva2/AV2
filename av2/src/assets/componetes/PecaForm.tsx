import { useState } from "react";
import Peca, { TipoPeca, StatusPeca } from "../models/Peca";

interface Props {
  onAdd: (p: Peca) => void;
}

export default function PecaForm({ onAdd }: Props) {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState<TipoPeca>(TipoPeca.NACIONAL);
  const [fornecedor, setFornecedor] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(new Peca(nome, tipo, fornecedor, StatusPeca.EM_PRODUCAO));
    setNome("");
    setFornecedor("");
  };

  return (
    <form onSubmit={handleSubmit} className=" bg-slate-300  p-6 rounded-lg shadow-lg m-2">
      <h3 className="text-3xl font-bold mb-4 text-center">Adicionar Peça</h3>
      <input placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} className="bg-white mb-2 p-2 rounded m-2"/>
      <input placeholder="Fornecedor" value={fornecedor} onChange={(e) => setFornecedor(e.target.value)} className="bg-white mb-2 p-2 rounded m-2" />
      <select value={tipo} onChange={(e) => setTipo(e.target.value as TipoPeca)} className="bg-white mb-2 p-2 rounded m-2">
        <option value={TipoPeca.NACIONAL}>Nacional</option>
        <option value={TipoPeca.IMPORTADA}>Importada</option>
      </select>
      <button className="bg-slate-500 text-white p-2 rounded hover:bg-sky-600"type="submit">Cadastrar</button>
    </form>
  );
}
