import { Endereco } from "./endereco";
import { Telefone } from "./telefone";

export class Cliente {
  #cpf: string;
  nome: string;
  telefones: Set<Telefone>;
  email: string;
  endereco: Endereco;

  constructor(cpf: string, nome: string, email: string, endereco: Endereco) {
    this.#cpf = cpf;
    this.nome = nome.toLowerCase();
    this.email = email.toLowerCase();
    this.endereco = endereco;
    this.telefones = new Set();
  }

  getCpf(): string {
    return this.#cpf;
  }

  getNome(): string {
    return this.nome;
  }

  setNome(nome: string): void {
    this.nome = nome.toLowerCase();
  }

  getNomeMaiusculo(): string {
    return this.nome.toUpperCase();
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string): void {
    this.email = email.toLowerCase();
  }

  getEmailMaiusculo(): string {
    return this.email.toUpperCase();
  }

  getEndereco(): Endereco {
    return this.endereco;
  }

  setEndereco(endereco: Endereco): void {
    this.endereco = endereco;
  }

  getTelefones(): Set<Telefone> {
    return this.telefones;
  }

  adicionarTelefone(telefone: Telefone): void {
    this.telefones.add(telefone);
  }

  removerTelefone(telefone: Telefone): void {
    this.telefones.delete(telefone);
  }
}
