import { Pet } from "../../entities/pet/Pet"

export interface repositoryPet {
    salvar(pet: Pet)
    consultar(id: number): Promise<Pet>
}