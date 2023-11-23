import mysql from 'mysql2'
import { DatabaseConnection } from '../contracts/DatabaseConnection';

export class MySQLAdapter implements DatabaseConnection {
	connection: any;

	constructor () {
		this.connection = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: 'root',
			database: 'data_base_fake'
		}).promise()
	}

	query(statement: string): Promise<any> {
		return this.connection.query(statement);
	}

	close() {
		this.connection.end();
	}
}