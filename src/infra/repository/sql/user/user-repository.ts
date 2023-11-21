import MySQLAdapter from "../../../adapters/mySQL/MySQLAdapter";

export class UserRepository {
    mySQLAdapter: MySQLAdapter

    constructor(mySQLAdapter: MySQLAdapter){
        this.mySQLAdapter = mySQLAdapter
    }

    async salvar (obj) {
        const sql = `insert into account (nome, email, senha, cpf, idade) values ("${obj.nome}", "${obj.email}", "${obj.senha}, "${obj.cpf}", "${obj.idade}");`
        this.mySQLAdapter.query(sql)
    }
}