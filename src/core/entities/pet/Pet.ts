
export class Pet {
    doado: boolean;

    constructor(readonly nome, readonly raca,  readonly idade, private castrado, readonly cor) {
        this.doado = false;
     }

    doar() {
        if (this.doado) throw new Error('Já doado')
        this.doado = true;
    }

    castrar() {
        if (this.castrado) throw new Error('Já castrado')
        this.castrado = true;
    }
}
