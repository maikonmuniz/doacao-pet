
export class User {
    constructor(readonly props: Props) {
        this.props = props
    }
}

type Props = {
    nome: string,
    email: string,
    cpf: string,
    idade: number,
}