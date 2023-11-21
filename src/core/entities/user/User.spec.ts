import { User } from './User'

function makeSut(obj){
    return new User(obj)
}

test("Deve criar uma instância user", async function () {
    const userObj = {
        nome: "any",
        email: "any@any",
        senha: "password",
        cpf: "3212342342",
        idade: 32,
    }
    const user = makeSut(userObj)
    expect(userObj.nome).toBe(user.props.nome)
    expect(userObj.email).toBe(user.props.email)
    expect(userObj.senha).toBe(user.props.senha)
    expect(userObj.cpf).toBe(user.props.cpf)
});

test("Deve verificar se idade é maior que 18", async function () {
    const userObj = {
        nome: "any",
        email: "any@any",
        senha: "password",
        cpf: "3212342342",
        idade: 32,
    }
    const user = new User(userObj)
    const verificacaoIdade = user.verificarIdadeValida()
    expect(true).toBe(verificacaoIdade)
});

test("Deve verificar se idade é menor que 18", async function () {
    const userObj = {
        nome: "any",
        email: "any@any",
        senha: "password",
        cpf: "3212342342",
        idade: 15,
    }
    const user = makeSut(userObj)
    const verificacaoIdade = user.verificarIdadeValida()
    expect(false).toBe(verificacaoIdade)
});