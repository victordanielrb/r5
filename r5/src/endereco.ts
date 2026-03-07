export class Endereco {
  numero: number;
  rua: string;
  bairro: string;
  cidade: string;

  constructor(numero: number, rua: string, bairro: string, cidade: string) {
    this.numero = numero;
    this.rua = rua;
    this.bairro = bairro;
    this.cidade = cidade;
  }

  getNumero(): number {
    return this.numero;
  }

  setNumero(numero: number): void {
    this.numero = numero;
  }

  getRua(): string {
    return this.rua;
  }

  setRua(rua: string): void {
    this.rua = rua;
  }

  getBairro(): string {
    return this.bairro;
  }

  setBairro(bairro: string): void {
    this.bairro = bairro;
  }

  getCidade(): string {
    return this.cidade;
  }

  setCidade(cidade: string): void {
    this.cidade = cidade;
  }
}
