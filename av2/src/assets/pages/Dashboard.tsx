import { useState } from "react";
import Aeronave from "../models/Aeronave";
import Peca from "../models/Peca";
import Funcionario from "../models/Funcionario";
import AeronaveForm from "../componetes/AeronaveForm";
import AeronaveList from "../componetes/AeronaveList";
import PecaForm from "../componetes/PecaForm";
import FuncionarioForm from "../componetes/FuncionarioForm";
import FuncionarioList from "../componetes/FuncionarioList";
import EtapaList from "../componetes/EtapaList";
import EtapaForm from "../componetes/EtapaForm";
import TesteForm from "../componetes/TesteForm";
import TesteList from "../componetes/TesteList";
import Etapa from "../models/Etapa";
import Teste from "../models/Teste";
export default function Dashboard() {
  const [aeronaves, setAeronaves] = useState<Aeronave[]>([]);
  const [pecas, setPecas] = useState<Peca[]>([]);
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);
  const [etapas, setEtapas] = useState<Etapa[]>([]);
  const [testes, setTestes] = useState<Teste[]>([]);

  return (
    <div><h2 className="text-4xl font-bold mb-4 text-center">Painel de Controle – AeroCode</h2>
    <div className=" grid auto-cols-max grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 ">
      

      {/* AERONAVES */}
    
      <section className=" bg-slate-200 p-6 rounded-lg shadow-lg m-2 ">
        <AeronaveForm onAdd={(a) => setAeronaves([...aeronaves, a])} />
        <AeronaveList aeronaves={aeronaves} />
      </section>
     

      {/* PEÇAS */}
      
      <section className= "bg-slate-200  p-6 rounded-lg shadow-lg m-2">
        <PecaForm onAdd={(p) => setPecas([...pecas, p])} />
          <div className=" bg-slate-300  p-6 rounded-lg shadow-lg m-2">
        <h3 className="text-3xl font-bold mb-4 text-center">Peças</h3>
        <ul>
          {pecas.map((p, i) => (
            <li key={i}>
              {p.nome} — {p.tipo} — {p.status}
            </li>
          ))}
        </ul>

      </div>
      </section>
      

      {/* FUNCIONÁRIOS */}
      <section className="bg-slate-200  p-6 rounded-lg shadow-lg m-2">
        <FuncionarioForm onAdd={(f) => setFuncionarios([...funcionarios, f])}  />
        <FuncionarioList funcionarios={funcionarios} />
      </section>
     

      {/* ETAPAS */}
      <section className="bg-slate-200  p-6 rounded-lg shadow-lg m-2">
        <EtapaForm onAdd={(e) => setEtapas([...etapas, e])} />
        <EtapaList etapas={etapas} />
      </section>
     

      {/* TESTES */}
      <section className="bg-slate-200  p-6 rounded-lg shadow-lg m-2">
        <TesteForm onAdd={(t) => setTestes([...testes, t])} />
        <TesteList testes={testes} />
      </section>
    </div>
    </div>
  );
}
