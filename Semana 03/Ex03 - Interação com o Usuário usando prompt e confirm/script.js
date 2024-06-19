
 function iniciar (){
    console.log("Tarefa iniciada")

    window.alert("Você iniciou uma tarefa")
    const nome = window.prompt("Digite seu nome: ").trim()


    if (!nome) {
        console.log("O nome é obrigatório")
        window.alert("O nome é obrigatório")
        return iniciar ()
    }

    const confirmacao = window.confirm("Você quer continuar essa operação?")
    if (confirmacao == true){
        console.log("Confirmado")
    }else {
        console.log("Negado")
        return window.alert("Operação cancelada!")
    }

    const email = window.prompt ("Digite seu email:").trim()

    if (!email) {
        console.log("O email é obrigatório")
        window.alert("O Email é obrigatório")
        return iniciar ()
    }

    const dados = window.confirm("nome: " + nome + " " + "email: " + " " + email + " " + "Você confirma os dados?")

    const cadastro = window.alert("Dados cadastrados com sucesso: " + " " + "nome: " + nome + " " + "email: " + " " + email)
}