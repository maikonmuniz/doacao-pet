import { MySQLAdapter } from "../../../../adapters/mySQL/MySQLAdapter";
import { repoUser } from "../../../../core/repository/user/repository-user";

export class UserRepository implements repoUser {
    mySQLAdapter: MySQLAdapter

    constructor(mySQLAdapter: MySQLAdapter){
        this.mySQLAdapter = mySQLAdapter
    }

    async cadastrar (obj) {
        const sql = `insert into account (nome, email, senha, cpf, idade) values ("${obj.nome}", "${obj.email}", "${obj.senha}, "${obj.cpf}", "${obj.idade}");`
        this.mySQLAdapter.query(sql)
    }

    async consultarEmail(email: string): Promise<boolean> {
        const sql = `select email from user where ${email} = email;`
        const existeEmail = await this.mySQLAdapter.query(sql)

        if (existeEmail) {
            return true
        }
        return false
    }
}