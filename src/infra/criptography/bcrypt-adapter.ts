import { compare, hash } from 'bcrypt'

export class BcryptAdapter{
    async encrypt(value: string): Promise<string> {
        const hashGerado = await hash.hash(value, 6)
        return hashGerado
    }

    async comparaHash (senha, hashVlr): Promise<boolean> {
        return compare(senha, hashVlr)
    } 
}