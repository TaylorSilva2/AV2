import Peca from "./Peca";
import Etapa from "./Etapa";
import Teste from "./Teste";

export enum TipoAeronave {
  COMERCIAL = "COMERCIAL",
  MILITAR = "MILITAR",
}

export default class Aeronave {
  constructor(
    public codigo: string,
    public modelo: string,
    public tipo: TipoAeronave,
    public capacidade: number,
    public alcance: number,
    public pecas: Peca[] = [],
    public etapas: Etapa[] = [],
    public historicoDeTestes: Teste[] = []
  ) {}
}
