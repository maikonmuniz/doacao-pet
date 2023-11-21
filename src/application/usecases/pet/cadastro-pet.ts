import { PetRepository } from "../../../infra/repository/sql/pet/repository-pet"
import { Pet } from "../../../core/entities/pet/Pet"

export class PetCadastrato {
    repo: PetRepository

    constructor(repo: PetRepository) {
        this.repo = repo
    }

    async execute (input: Input) {
        const pet = new Pet(input.nome, input.raca, input.idade, input.castrado, input.cor)
        await this.repo.salvar(pet)
    }
}

type Input = {
    nome: string,
    idade?: number,
    raca?: string,
    cor: string,
    castrado: boolean
}
