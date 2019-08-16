window.onload = function () {

    console.warn("OLAAA MUNDO")

    let meuform = $("form#formAluno")

    console.log(meuform)

    meuform.on("submit", function (event) {

        event.preventDefault()

        console.log("DEU CERTO")

        let botao = $("form button")
        console.log(botao)

        let botaoQGira = Ladda.create(botao[0])
        botaoQGira.start()

    })

}