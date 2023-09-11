'use strict'

const info = [
{
    imagem: "./clientes/jerome-bueno.jpg",
    nome:"Jerome Bueno",
    mensagem:"Posso realizar o pagamento por...",
    contato: "João Paulo",
    tempo: "Há 30 minutos",
    quantidade: "1",
    plataforma: "./icones/Whatsapp icon.png"

},
{
    imagem: "./clientes/daniel-silva.jpg",
    nome:"Daniel Slva",
    mensagem:"Márcia diz: Bom dia, como posso ajuda...",
    contato: "Márcia",
    tempo: "Há 30 minutos",
    quantidade: "1",
    plataforma: "./icones/messager icon.png"

},
{
    imagem: "./clientes/bruno-adorno.jpg",
    nome:"Bruno Adorno",
    mensagem:"Bom dia, gostaria de saber quant...",
    contato: "Joysi",
    tempo: "Há 30 minutos",
    quantidade: "1",
    plataforma: "./icones/sms icon.png"

},
{
    imagem: "./clientes/viviane-ribeiro.jpg",
    nome:"Viviane Ribeiro",
    mensagem:"Adorei o atendimento, foi nota 10...",
    contato: "Geovana",
    tempo: "Há 30 minutos",
    quantidade: "1",
    plataforma: "./icones/instagram icon.png"

},
{
    imagem: "./clientes/maria-joana.jpg",
    nome:"Maria Joana",
    mensagem:"Jonathan diz: A senhora precisa de mais a...",
    contato: "Jonathan",
    tempo: "Há 30 minutos",
    quantidade: "1",
    plataforma: "./icones/Whatsapp icon.png"

},
{
    imagem: "./clientes/juliana-pereira.jpg",
    nome:"Juliana Pereira",
    mensagem:"Saulo diz: Enviarei o comprovante...",
    contato: "Saulo",
    tempo: "Há 30 minutos",
    quantidade: "1",
    plataforma: "./icones/instagram icon.png"

},
{
    imagem: "./clientes/henrique-martins.jpg",
    nome:"Henrique Martins",
    mensagem:"Joysi diz: Estarei enviando o comprovant...",
    contato: "Joisy",
    tempo: "Há 30 minutos",
    quantidade: "1",
    plataforma: "./icones/Whatsapp icon.png"

}
]

const criarCards = (info) => {

    const imagem = document.createElement('img')
    imagem.src = `./img/${info.imagem}`
    imagem.alt = info.nome
    imagem.classList.add('img')
    
    const nome = document.createElement('h1')
    nome.textContent = info.nome
    nome.classList.add('nome')

    const quantidade = document.createElement('h2')
    quantidade.textContent = info.quantidade
    quantidade.classList.add('qtd')

    const mensagem = document.createElement('span')
    mensagem.textContent = info.mensagem
    mensagem.classList.add('msg')

    const contato = document.createElement('div')
    contato.textContent = info.contato
    contato.classList.add('contato-cliente')

    const tempo = document.createElement('div')
    tempo.textContent = info.tempo
    tempo.classList.add('tempo')

    const plataforma = document.createElement('img')
    plataforma.src = `./img/${info.plataforma}`
    plataforma.alt = "plataformas"
    plataforma.classList.add('plataformas')
    





    const p1 = document.createElement('div')
    p1.replaceChildren(nome, quantidade)
    p1.classList.add('p1')

    const p2 = document.createElement('div')
    p2.replaceChildren(mensagem)

    const p3 = document.createElement('div')
    p3.replaceChildren(p1, p2, tempo)

    const p4 = document.createElement('div')
    p4.replaceChildren(plataforma)

    const p5 = document.createElement('div')
    p5.replaceChildren(imagem, p3, contato, p4)
    p5.classList.add('card')
    
    return p5
}

const mostrarCards = (info) => {

    const container_cards = document.getElementById('container-cards')
    const cards = criarCards(info)

    container_cards.appendChild(cards)
}

info.forEach(mostrarCards)