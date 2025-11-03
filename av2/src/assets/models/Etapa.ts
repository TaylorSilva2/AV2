import Funcionario from "./Funcionario";

export enum StatusEtapa {
  PENDENTE = "PENDENTE",
  ANDAMENTO = "ANDAMENTO",
  CONCLUIDA = "CONCLUIDA",
}

export default class Etapa {
  constructor(
    public nome: string,
    public prazo: number,
    public status: StatusEtapa = StatusEtapa.PENDENTE,
    public funcionarios: Funcionario[] = []
  ) {}
}
