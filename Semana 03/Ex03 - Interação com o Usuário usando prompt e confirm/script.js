
 function iniciar (){
    console.log("Tarefa iniciada")

    window.alert("Você iniciou uma tarefa")
    const nome = window.prompt("Digite seu nome: ")

    const confirmacao = window.confirm("Você quer continuar essa operação?")
    if (confirmacao == true){
        console.log("Positivo")
    }else {
        console.log("Negativo")
        return window.alert("Operação cancelada!")
    }

    const email = window.prompt ("Digite seu email:")

    const dados = window.confirm("nome: " + nome + " " + "email: " + " " + email + " " + "Você confirma os dados?")
}