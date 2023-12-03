import { User } from "../../entities/user/User"

export interface repoUser{
    consultarEmail(email: string): Promise<User>
    cadastrar(input: User): Promise<void>
    consultar(id: number)
}