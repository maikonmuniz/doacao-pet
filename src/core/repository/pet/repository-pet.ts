import { Pet } from "../../entities/pet/Pet"

export interface repositoryPet {
    salvar(pet: Pet)
}