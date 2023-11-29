import { User } from './User'

function makeSut(obj){
    return User.criacao(obj.nome, obj.email, obj.senha, obj.cpf, obj.idade)
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
    expect(userObj.nome).toBe(user.nome)
    expect(userObj.email).toBe(user.email)
    expect(userObj.senha).toBe(user.senha)
    expect(userObj.cpf).toBe(user.cpf)
});

test("Deve verificar se idade é maior que 18", function () {
    const userObj = {
        nome: "any",
        email: "any@any",
        senha: "password",
        cpf: "3212342342",
        idade: 32,
    }
    const user = makeSut(userObj)
    const verificacaoIdade = user.verificarIdadeValida()
    expect(true).toBe(verificacaoIdade)
});

test("Deve verificar se a idade é menor que 18", function () {
    const userObj = {
        nome: "any",
        email: "any@any",
        senha: "password",
        cpf: "3212342342",
        idade: 15,
    }
    const user = makeSut(userObj)
    expect(user.verificarIdadeValida()).toBe(false);

});