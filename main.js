const elementRes = document.querySelector('#resposta')
const pergunta = document.querySelector('#input')
const semValor = document.querySelector('#semresposta')

const respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
]

//clicar em fazer pergunta
function fazerPergunta() {

    if(pergunta.value == ""){
        semValor.innerHTML = "Por favor, digite sua pergunta"
        setTimeout(function() {
            semValor.style.opacity = 0;
        }, 1500)
        return
    }

    const perguntaResposta = "<div>" + pergunta.value + "</div>"

    const totalRespostas = respostas.length
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
    elementRes.innerHTML =  perguntaResposta + respostas[numeroAleatorio]

    setTimeout(function() {
        elementRes.style.opacity = 0;
    }, 2000)

    setTimeout(() => {
        document.location.reload();
      }, 2000);
}
