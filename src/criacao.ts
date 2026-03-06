import { Cliente } from "./cliente";
import { Empresa } from "./empresa";
import { Endereco } from "./endereco";
import { Telefone } from "./telefone";

export default function Criacao():Empresa{

    // Criar empresa
const enderecoEmpresa = new Endereco("SP", "Sao Paulo", "Av Paulista", "1000");
const empresa = new Empresa("ABC LTDA", "Mercado Online", "12.345.678/0001-90", enderecoEmpresa);

// Adicionar telefones da empresa
empresa.adicionarTelefone(new Telefone("11", "11111111"));
empresa.adicionarTelefone(new Telefone("11", "22222222"));

const cliente1 = new Cliente("111.111.111-11", "Joao", "joao@email.com", new Endereco("SP", "Sao Jose dos Campos", "Av Andromeda", "987"));
cliente1.adicionarTelefone(new Telefone("99999999", "99999999"));
cliente1.adicionarTelefone(new Telefone("99999999", "99999999"));

const cliente2 = new Cliente("222.222.222-22", "Gabriel", "gabriel@email.com", new Endereco("SP", "Sao Jose dos Campos", "Av Andromeda", "412"));
cliente2.adicionarTelefone(new Telefone("88888888", "88888888"));
cliente2.adicionarTelefone(new Telefone("88888888", "88888888"));

const cliente3 = new Cliente("333.333.333-33", "Barbara", "barbara@email.com", new Endereco("SP", "Sao Jose dos Campos", "Av Sao Joao", "789"));
cliente3.adicionarTelefone(new Telefone("77777777", "77777777"));
cliente3.adicionarTelefone(new Telefone("77777777", "77777777"));

const cliente4 = new Cliente("444.444.444-44", "Marcia", "marcia@email.com", new Endereco("SP", "Sao Jose dos Campos", "Av Andromeda", "452"));
cliente4.adicionarTelefone(new Telefone("66666666", "66666666"));
cliente4.adicionarTelefone(new Telefone("66666666", "66666666"));

const cliente5 = new Cliente("555.555.555-55", "Pedro", "pedro@email.com", new Endereco("SP", "Sao Paulo", "Rua Augusta", "123"));
cliente5.adicionarTelefone(new Telefone("55555555", "55555555"));
cliente5.adicionarTelefone(new Telefone("55555555", "55555555"));

empresa.adicionarCliente(cliente1);
empresa.adicionarCliente(cliente2);
empresa.adicionarCliente(cliente3);
empresa.adicionarCliente(cliente4);
empresa.adicionarCliente(cliente5);


return empresa;

}