import { User } from "../../entities/user/User"

export interface repoUser{
    consultarEmail(email: string): Promise<boolean>
    cadastrar(input: User): Promise<void>
}