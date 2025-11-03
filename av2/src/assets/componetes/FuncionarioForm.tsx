import { useState } from "react";
import Funcionario, { NivelPermissao } from "../models/Funcionario";

interface Props {
  onAdd: (f: Funcionario) => void;
}

export default function FuncionarioForm({ onAdd }: Props) {
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [usuario, setUsuario] = useState("");
  const [nivel, setNivel] = useState<NivelPermissao>(NivelPermissao.OPERADOR);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(new Funcionario(id, nome, telefone, endereco, usuario, nivel));
    setId("");
    setNome("");
    setTelefone("");
    setEndereco("");
    setUsuario("");
  };

  return (
    <form onSubmit={handleSubmit} className=" bg-slate-300  p-6 rounded-lg shadow-lg m-2">
      <h3 className="text-3xl font-bold mb-4 text-center">Cadastrar Funcionário</h3>
      <input placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} className="bg-white mb-2 p-2 rounded m-2" />
      <input placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} className="bg-white mb-2 p-2 rounded m-2" />
      <input placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} className="bg-white mb-2 p-2 rounded m-2" />
      <input placeholder="Endereço" value={endereco} onChange={(e) => setEndereco(e.target.value)} className="bg-white mb-2 p-2 rounded m-2"/>
      <input placeholder="Usuário" value={usuario} onChange={(e) => setUsuario(e.target.value)} className="bg-white mb-2 p-2 rounded m-2"/>
      <input placeholder="Senha" value={usuario} onChange={(e) => setUsuario(e.target.value)} className="bg-white mb-2 p-2 rounded m-2"/>
      <select value={nivel} onChange={(e) => setNivel(e.target.value as NivelPermissao)} className="bg-white mb-2 p-2 rounded m-2">
        <option value={NivelPermissao.ADMINISTRADOR}>Administrador</option>
        <option value={NivelPermissao.ENGENHEIRO}>Engenheiro</option>
        <option value={NivelPermissao.OPERADOR}>Operador</option>
      </select>
      <button className="bg-slate-500 text-white p-2 rounded hover:bg-sky-600" type="submit">Adicionar</button>
    </form>
  );
}
