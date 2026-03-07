import { Descritor } from "./descritor";
import { Empresa } from "./empresa";
import { Endereco } from "./endereco";
import { Funcionario } from "./funcionario";
import { Telefone } from "./telefone";

let endereco = new Endereco(123, "Av. boitata", "capao redondo", "São Paulo");
let telefone = new Telefone("011", "9-12345-1234");
let funcionario = new Funcionario("Flavio Mouse Hunter", "123456789", "000.999.999-12", endereco, telefone);
let funcionarios = [funcionario];
let telefones = [telefone];
let empresa = new Empresa(funcionarios, endereco, "ABC123", "Mercado ", "123-000-000-19", telefones);

let descritor = new Descritor();
descritor.descrever(empresa);
