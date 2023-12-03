import { MySQLAdapter } from "../../../../adapters/mySQL/MySQLAdapter";
import { repoUser } from "../../../../core/repository/user/repository-user";
import { User } from "../../../../core/entities/user/User";

export class UserRepository implements repoUser {
    conn: MySQLAdapter

    constructor(mySQLAdapter: MySQLAdapter){
        this.conn = mySQLAdapter
    }

    async cadastrar (obj) {
        const sql = `insert into account (nome, email, senha, cpf, idade) values ("${obj.nome}", "${obj.email}", "${obj.senha}, "${obj.cpf}", "${obj.idade}");`
        this.conn.query(sql)
    }

    async consultarEmail(email: string): Promise<User> {
        const sql = `select * from user where ${email} = email;`
        const consulta = await this.conn.query(sql)
        const user = new User(consulta.nome, consulta.email, consulta.senha, consulta.cpf, consulta.idade, consulta.data)
        return user
    }

    async consultar(id: number) {
        const sql = `select * from user where ${id} = id;`
        const consulta = await this.conn.query(sql)
        const user = new User(consulta.nome, consulta.email, consulta.senha, consulta.cpf, consulta.idade, consulta.data)
        return user
    }
}
