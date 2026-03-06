import { Cliente } from "./cliente";
import { Endereco } from "./endereco";
import { Telefone } from "./telefone";

export class Empresa {
  #cnpj: string;
  razaoSocial: string;
  nomeFantasia: string;
  endereco: Endereco;
  clientes: Set<Cliente>;
  telefones: Set<Telefone>;

  constructor(razaoSocial: string, nomeFantasia: string, cnpj: string, endereco: Endereco) {
    this.razaoSocial = razaoSocial.toLowerCase();
    this.nomeFantasia = nomeFantasia.toLowerCase();
    this.#cnpj = cnpj;
    this.endereco = endereco;
    this.clientes = new Set();
    this.telefones = new Set();
  }

  getCnpj(): string {
    return this.#cnpj;
  }

  getRazaoSocial(): string {
    return this.razaoSocial;
  }

  getRazaoSocialMaiusculo(): string {
    return this.razaoSocial.toUpperCase();
  }

  setRazaoSocial(razaoSocial: string): void {
    this.razaoSocial = razaoSocial.toLowerCase();
  }

  getNomeFantasia(): string {
    return this.nomeFantasia;
  }

  getNomeFantasiaMaiusculo(): string {
    return this.nomeFantasia.toUpperCase();
  }

  setNomeFantasia(nomeFantasia: string): void {
    this.nomeFantasia = nomeFantasia.toLowerCase();
  }

  getEndereco(): Endereco {
    return this.endereco;
  }

  setEndereco(endereco: Endereco): void {
    this.endereco = endereco;
  }

  adicionarCliente(cliente: Cliente): void {
    this.clientes.add(cliente);
  }

  adicionarTelefone(telefone: Telefone): void {
    this.telefones.add(telefone);
  }

  detalhe(): string {
    let resultado = `Razao Social: ${this.razaoSocial}\n`;
    resultado += `Nome fantasia: ${this.nomeFantasia}\n`;
    resultado += "----------------\n";

    for (const cliente of this.clientes) {
      resultado += `Nome: ${cliente.getNome()}\n`;
      resultado += `Estado: ${cliente.getEndereco().getEstado()} `;
      resultado += `cidade: ${cliente.getEndereco().getCidade()} `;
      resultado += `rua: ${cliente.getEndereco().getRua()} `;
      resultado += `numero: ${cliente.getEndereco().getNumero()}\n`;

      for (const telefone of cliente.getTelefones()) {
        resultado += `ddd: ${telefone.getDdd()} numero: ${telefone.getNumero()}\n`;
      }

      resultado += "\n";
    }

    return resultado;
  }
}
