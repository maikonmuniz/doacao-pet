
export class User {
    constructor(readonly props: Props) {
        this.props = props
    }

    verificarIdadeValida (): boolean {
        return (this.props.idade > 18)
    }
}

type Props = {
    nome: string,
    email: string,
    senha: string,
    cpf: string,
    idade: number,
}
