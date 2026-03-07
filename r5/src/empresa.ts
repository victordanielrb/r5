import { Endereco } from "./endereco";
import { Funcionario } from "./funcionario";
import { Telefone } from "./telefone";

export class Empresa {
  funcionarios: Funcionario[];
  endereco: Endereco;
  razaoSocial: string;
  nomeFantasia: string;
  cnpj: string;
  telefones: Telefone[];

  constructor(
    funcionarios: Funcionario[],
    endereco: Endereco,
    razaoSocial: string,
    nomeFantasia: string,
    cnpj: string,
    telefones: Telefone[]
  ) {
    this.funcionarios = funcionarios;
    this.endereco = endereco;
    this.razaoSocial = razaoSocial;
    this.nomeFantasia = nomeFantasia;
    this.cnpj = cnpj;
    this.telefones = telefones;
  }

  getFuncionarios(): Funcionario[] {
    return this.funcionarios;
  }

  setFuncionarios(funcionarios: Funcionario[]): void {
    this.funcionarios = funcionarios;
  }

  getEndereco(): Endereco {
    return this.endereco;
  }

  setEndereco(endereco: Endereco): void {
    this.endereco = endereco;
  }

  getRazaoSocial(): string {
    return this.razaoSocial;
  }

  setRazaoSocial(razaoSocial: string): void {
    this.razaoSocial = razaoSocial;
  }

  getNomeFantasia(): string {
    return this.nomeFantasia;
  }

  setNomeFantasia(nomeFantasia: string): void {
    this.nomeFantasia = nomeFantasia;
  }

  getCnpj(): string {
    return this.cnpj;
  }

  getTelefones(): Telefone[] {
    return this.telefones;
  }

  setTelefones(telefones: Telefone[]): void {
    this.telefones = telefones;
  }
}
