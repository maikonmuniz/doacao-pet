import Sinon from "sinon"
import { CadastrarUser } from "./cadastrar-user";
import { HashBcrypt } from "../../../shared/application/provider/bcrypt/hashBcrypt";
import { repoUser } from "../../../core/repository/user/repository-user";

const makeRepoUser = () => {
    class repoSQL implements repoUser {
        cadastrar(): Promise<void> {
           return new Promise(resolve => resolve())
        }
        consultarEmail (): Promise<boolean>{
            return new Promise(resolve => resolve(true))
        }
    }
    return new repoSQL()
}

const makeEncrypt = () => {
    class Encrypt implements HashBcrypt {
        gerar(senha: string): Promise<string> {
            return new Promise(resolve => resolve('any_senha')) 
        }
        comparar(senha: string, hash: string): Promise<boolean> {
            return new Promise(resolve => resolve(true))
        }
    }
    return new Encrypt()
}

test('deve verificar usuário já está cadastrado', async () => {

    const bcryptAdapter = makeEncrypt()
    const repo = makeRepoUser()
    const cadastrarUser = new CadastrarUser(repo, bcryptAdapter)

    const entrada = {
        nome: "xuxu",
        email: "any@any",
        senha: "any@senha432",
        cpf: "432232323",
        idade: 121,
    }

    await expect(() => cadastrarUser.execute(entrada)).rejects.toThrow(new Error("Usuário já cadastrado"));
})