
export class Pet {

    private constructor(
                readonly id,
                readonly nome, 
                readonly raca,
                readonly idade, 
                readonly castrado, 
                readonly cor,
                readonly agressivo,
                readonly doado) {
    }

    static criacao(id: number, nome: string, raca: string, idade: number, castrado: boolean, cor: string, agressivo: boolean, doado: boolean) {
        if (!doado) {
            doado = false
        }

        return new Pet(id, nome, raca, idade, castrado, cor, agressivo, doado)
    }
}
