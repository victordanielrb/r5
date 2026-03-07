import { Empresa } from "./empresa";

export class Descritor {
  constructor() {}

  descrever(empresa: Empresa): void {
    console.log(`Razão Social: ${empresa.getRazaoSocial()}`);
    console.log(`Nome Fantasia: ${empresa.getNomeFantasia()}`);
    console.log(`CNPJ: ${empresa.getCnpj()}`);
    console.log(`Endereço: ${empresa.getEndereco().getRua()}, ${empresa.getEndereco().getNumero()} - ${empresa.getEndereco().getBairro()} - ${empresa.getEndereco().getCidade()}`);
    console.log("\nTelefones da Empresa:");
    for (const telefone of empresa.getTelefones()) {
      console.log(`  ${telefone.getDdd()} ${telefone.getNumero()}`);
    }
    console.log("\nFuncionários:");
    for (const funcionario of empresa.getFuncionarios()) {
      console.log(`  Nome: ${funcionario.getNome()}`);
      console.log(`  Matrícula: ${funcionario.getMatricula()}`);
      console.log(`  CPF: ${funcionario.getCpf()}`);
      console.log(`  Endereço: ${funcionario.getEndereco().getRua()}, ${funcionario.getEndereco().getNumero()} - ${funcionario.getEndereco().getBairro()} - ${funcionario.getEndereco().getCidade()}`);
      console.log(`  Telefone: ${funcionario.getTelefone().getDdd()} ${funcionario.getTelefone().getNumero()}`);
      console.log();
    }
  }
}
