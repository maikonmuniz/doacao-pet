import { Adocao } from "./Adocao";


const makeSut = (obj) => {
    return Adocao.criacao(obj.idUser, obj.idPet, obj.renda, obj.dependentes, obj.agressivo)
}

test("deve criar uma instância de adocao", () => {

    const obj = {
        idUser: 1,
        idPet: 1,
        renda: 1600.50,
        dependentes: 0,
        agressivo: false,
    }

    const adocao = makeSut(obj)

    expect(adocao.idUser).toBe(1)
    expect(adocao.idPet).toBe(1)
    expect(adocao.renda).toBe(1600.50)
    expect(adocao.dependentes).toBe(0)
    expect(adocao.agressivo).toBe(false)
})

test('deve aceitar a adoção', () => {

    const obj = {
        idUser: 1,
        idPet: 1,
        renda: 1600.50,
        dependentes: 0,
        agressivo: false,
    }
    const adocao = makeSut(obj)
    adocao.aceitar()
    expect(adocao.statusAdocao()).toBe('doado')
})

test('deve negar a adoção, cão agressivo', () => {
    const obj = {
        idUser: 1,
        idPet: 1,
        renda: 1600.50,
        dependentes: 3,
        agressivo: true,
    }
    const adocao = makeSut(obj)
    adocao.aceitar()
    expect(adocao.statusAdocao()).toBe('negado')
})