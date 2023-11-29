import { User } from '../../../core/entities/user/User'
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
        const user = User.criacao(input.nome, input.email, input.senha, input.cpf, input.idade)
        await this.repo.cadastrar(user)
    }
}

type Input = {
    nome: string,
    email: string,
    senha: string,
    cpf: string,
    idade: number,
}