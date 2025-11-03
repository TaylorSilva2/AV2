export enum TipoTeste {
  ELETRICO = "ELETRICO",
  HIDRAULICO = "HIDRAULICO",
  AERODINAMICO = "AERODINAMICO",
}

export enum ResultadoTeste {
  APROVADO = "APROVADO",
  REPROVADO = "REPROVADO",
}

export default class Teste {
  constructor(public tipo: TipoTeste, public resultado: ResultadoTeste) {}
}
