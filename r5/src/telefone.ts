export class Telefone {
  ddd: string;
  numero: string;

  constructor(ddd: string, numero: string) {
    this.ddd = ddd;
    this.numero = numero;
  }

  getDdd(): string {
    return this.ddd;
  }

  setDdd(ddd: string): void {
    this.ddd = ddd;
  }

  getNumero(): string {
    return this.numero;
  }

  setNumero(numero: string): void {
    this.numero = numero;
  }
}
