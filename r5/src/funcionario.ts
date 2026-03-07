import { Endereco } from "./endereco";
import { Telefone } from "./telefone";

export class Funcionario {
  nome: string;
  matricula: string;
  cpf: string;
  endereco: Endereco;
  telefone: Telefone;

  constructor(nome: string, matricula: string, cpf: string, endereco: Endereco, telefone: Telefone) {
    this.nome = nome;
    this.matricula = matricula;
    this.cpf = cpf;
    this.endereco = endereco;
    this.telefone = telefone;
  }

  getNome(): string {
    return this.nome;
  }

  setNome(nome: string): void {
    this.nome = nome;
  }

  getMatricula(): string {
    return this.matricula;
  }

  setMatricula(matricula: string): void {
    this.matricula = matricula;
  }

  getCpf(): string {
    return this.cpf;
  }

  getEndereco(): Endereco {
    return this.endereco;
  }

  setEndereco(endereco: Endereco): void {
    this.endereco = endereco;
  }

  getTelefone(): Telefone {
    return this.telefone;
  }

  setTelefone(telefone: Telefone): void {
    this.telefone = telefone;
  }
}
