//mostra a lista oculta clicando no menu hamburguer
const menu = document.querySelector("#menu")

const listaMenu = document.querySelector(".lista-links")

const imagemMenu = document.querySelector('.img-menu')


menu.addEventListener('change', () => {
    if(menu.checked){
        listaMenu.classList.add("show-list")
        imagemMenu.src = "assets/close.svg"
        return
    }

    listaMenu.classList.remove("show-list")
    imagemMenu.src = "assets/menu.svg"
})


//fecha o menu hamburguer ao clicar em um link
const linksLista = document.querySelectorAll(".lista-links a")

linksLista.forEach(link => {
    link.addEventListener('click', () => {
        menu.checked = false
        listaMenu.classList.remove('show-list')
        imagemMenu.src = "assets/menu.svg"
    })
})




//altera a imagem do link do github
const logoGithub = document.querySelector("#git-red")

const linkGithub = document.querySelector(".link-github")

linkGithub.addEventListener('mouseover', () => {
    logoGithub.src = "assets/icones_tecnologias/github_branco.svg"
    logoGithub.style.width = '21px';
})

linkGithub.addEventListener('mouseout', () => {
    logoGithub.src = "assets/icones_tecnologias/github_vermelho.svg"
})