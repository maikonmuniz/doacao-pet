import { repoUser } from '../../../core/repository/user/repository-user'
import { HashBcrypt } from '../../../shared/application/provider/HashBcrypt'

export class cadastrarUser {
    repo: repoUser
    hashBcrypt: HashBcrypt

    constructor(repo: repoUser, hashBcrypt: HashBcrypt){
        this.repo = repo
        this.hashBcrypt = hashBcrypt
    }

    async execute(input: Input){
        const verificacaoEmail = await this.repo.consultarEmail(input.email)

        if (verificacaoEmail) {
            throw new Error("Usuário já cadastrado")            
        }

        const senha = await this.hashBcrypt.gerar(input.senha)

        input.senha = senha

        await this.repo.cadastrar(input)

    }
}

type Input = {
    nome: string,
    email: string,
    senha: string,
    cpf: string,
    idade: number,
}