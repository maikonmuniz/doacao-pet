
export class User {

    constructor(readonly nome: string,
                readonly email: string,
                readonly senha: string,
                readonly cpf: string,
                readonly idade: number,
                readonly data) 
                { }

    static criacao(nome: string, 
                   email: string,
                   senha: string,
                   cpf: string, 
                   idade: number) {

        const data: Date = new Date()
        return new User(nome, email, senha, cpf, idade, data)
    }

    verificarIdadeValida () {
        const minimaIdadeValida = 18
        if (this.idade < minimaIdadeValida) return false
        return true
    }
}
