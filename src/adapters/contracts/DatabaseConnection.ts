
export interface DatabaseConnection{
    query(statement: string): Promise<any>
    close()
}
