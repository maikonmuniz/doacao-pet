import MySQLAdapter from "../../../../adapters/mySQL/MySQLAdapter";
import { Pet } from "../../../../core/entities/pet/Pet";

export class PetRepository {
    mySQLAdapter: MySQLAdapter

    constructor(mySQLAdapter: MySQLAdapter) {
        this.mySQLAdapter = mySQLAdapter
    }

    async salvar(obj: Pet) {
        const sql = `insert into account (nome, cor, raca, idade) values ("${obj.cor}", "${obj.raca}", "${obj.idade}");`
        this.mySQLAdapter.query(sql)
    }
}
