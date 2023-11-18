
export class Pet {

    constructor(readonly props: Dados) { }

    doar() {
        if (this.props.doado) throw new Error('Já doado')
        this.props.doado = true;
    }

    castrar() {
        if (this.props.castrado) throw new Error('Já castrado')
        this.props.castrado = true;
    }
}

type Dados = {
    nome: string,
    idade?: number,
    raca?: string,
    cor: string,
    tamanho: string,
    doado: boolean,
    castrado: boolean
}