import { repoUser } from '../../../core/repository/user/repository-user'
import { HashBcrypt } from '../../../shared/application/provider/bcrypt/hashBcrypt'

export class CadastrarUser {
    repo: repoUser
    hashBcrypt: HashBcrypt

    constructor(repo: repoUser, hashBcrypt: HashBcrypt){
        this.repo = repo
        this.hashBcrypt = hashBcrypt
    }

    async execute(input: Input){
        const verificacaoEmailExiste = await this.repo.consultarEmail(input.email)

        if (verificacaoEmailExiste) {
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