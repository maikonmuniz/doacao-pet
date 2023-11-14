export interface HashBcrypt {
    gerar(senha: string): Promise<string>;
    comparar(senha: string, hash: string): Promise<boolean>;
}
