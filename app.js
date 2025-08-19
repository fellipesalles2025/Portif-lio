const menu = document.querySelector("#menu")

const listaMenu = document.querySelector(".lista-links")

menu.addEventListener('change', () => {
    if(menu.checked){
        listaMenu.classList.add("show-list")
        return
    }

    listaMenu.classList.remove("show-list")
})


const logoGithub = document.querySelector("#git-red")

const linkGithub = document.querySelector(".link-github")

console.log(logoGithub)

linkGithub.addEventListener('mouseover', () => {
    logoGithub.src = "assets/icones_tecnologias/github_branco.svg"
    logoGithub.style.width = '21px';
})

linkGithub.addEventListener('mouseout', () => {
    logoGithub.src = "assets/icones_tecnologias/github_vermelho.svg"
})