export enum TipoPeca {
  NACIONAL = "NACIONAL",
  IMPORTADA = "IMPORTADA",
}

export enum StatusPeca {
  EM_PRODUCAO = "EM_PRODUCAO",
  EM_TRANSPORTE = "EM_TRANSPORTE",
  PRONTA = "PRONTA",
}

export default class Peca {
  constructor(
    public nome: string,
    public tipo: TipoPeca,
    public fornecedor: string,
    public status: StatusPeca = StatusPeca.EM_PRODUCAO
  ) {}
}
