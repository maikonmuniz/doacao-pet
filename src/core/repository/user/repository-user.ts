
export interface repoUser{
    cadastrar(input: Input): Promise<void>
}

type Input = {
    nome: string,
    email: string,
    cpf: string,
    idade: number,
}