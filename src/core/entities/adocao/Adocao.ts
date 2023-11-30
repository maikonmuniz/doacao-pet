
export class Adocao {

    private constructor (
        readonly idUser: number, 
        readonly idPet: number, 
        readonly renda: number, 
        readonly dependentes: number, 
        readonly data: Date,
        readonly agressivo: boolean,
        private status: string) {
        }

    static criacao(idUser: number, idPet: number, renda: number, dependentes: number, agressivo: boolean): Adocao{
        const data = new Date()
        const status = 'solitacao'

        return new Adocao(idUser, idPet, renda, dependentes, data, agressivo, status)
    }

    aceitar (): boolean{
        if (this.dependentes > 0 && this.agressivo) {
            this.status = 'negado'
            return false; 
        }
        this.status = 'doado'

        return true
    }

    statusAdocao () {
        return this.status
    }
}