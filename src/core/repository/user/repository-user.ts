
export interface repoUser{
    consultarEmail(email: string): Promise<boolean>
    cadastrar(input: Input): Promise<void>
}

type Input = {
    nome: string,
    email: string,
    cpf: string,
    idade: number,
}