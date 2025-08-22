//mostra a lista oculta clicando no menu hamburguer
const menu = document.querySelector("#menu")

const listaMenu = document.querySelector(".lista-links")

const imagemMenu = document.querySelector('.img-menu')


menu.addEventListener('change', () => {
    if(menu.checked){
        listaMenu.classList.add("show-list")
        return
    }

    listaMenu.classList.remove("show-list")
})


//fecha o menu hamburguer ao clicar em um link
const linksLista = document.querySelectorAll(".lista-links a")

linksLista.forEach(link => {
    link.addEventListener('click', () => {
        menu.checked = false
        listaMenu.classList.remove('show-list')
    })
})




//altera a imagem do link do github
const logoGithub1 = document.querySelector("#github1")

const logoGithub2 = document.querySelector('#github2')

const logoLinkedin = document.querySelector('#linkedin')


const linkGithub1 = document.querySelector('#link_github1')

const linkGithub2 = document.querySelector('#link_github2')

const linkLinkedin = document.querySelector('#link_linkedin')

//primeiro link do github
linkGithub1.addEventListener('mouseover', () => {

    logoGithub1.src = "assets/icones_tecnologias/github_branco_pequeno.svg"
})

linkGithub1.addEventListener('mouseout', () => {

    logoGithub1.src = "assets/icones_tecnologias/github_vermelho.svg"
})

//segundo link do gihub
linkGithub2.addEventListener('mouseover', () => {

    logoGithub2.src = "assets/icones_tecnologias/github_branco_pequeno.svg"
})

linkGithub2.addEventListener('mouseout', () => {

    logoGithub2.src = "assets/icones_tecnologias/github_vermelho.svg"
})

//link do linkedin
linkLinkedin.addEventListener('mouseover', () => {

    logoLinkedin.src = "assets/linkedin_branco.svg"
})

linkLinkedin.addEventListener('mouseout', () => {

    logoLinkedin.src = "assets/linkedin_vermelho.svg"
})