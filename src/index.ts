import { Cliente } from "./cliente";
import Criacao from "./criacao";
import { Empresa } from "./empresa";
import { Endereco } from "./endereco";
import { Telefone } from "./telefone";

//Pelo o que entendi o senhor queria uma arquitetura modular, mas como usei ts meio que já fiz isso sem querer
const empresaFinal = Criacao();

console.log(empresaFinal.detalhe());
