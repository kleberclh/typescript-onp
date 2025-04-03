type Id = number | string;
type Nome = string;

function pessoa(id: Id, nome: Nome, idade: number): object {
  return {
    id,
    nome,
    idade,
  };
}

type Humano = "Mulher" | "Homem";

let user: Humano;

user = "Mulher";
