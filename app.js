//mostra a lista oculta clicando no menu hamburguer
const menu = document.querySelector("#menu")

const listaMenu = document.querySelector(".lista-links")

const imagemMenu = document.querySelector('.img-menu')


menu.addEventListener('change', () => {
        listaMenu.classList.toggle("show-list")
})


//fecha o menu hamburguer ao clicar em um link
const linksLista = document.querySelectorAll(".lista-links a")

linksLista.forEach(link => {
    link.addEventListener('click', () => {
        menu.checked = false
        listaMenu.classList.remove('show-list')
    })
})


const links = [
  {
    link: document.querySelector('#link_github1'),
    logo: document.querySelector('#github1'),
    imgNormal: 'assets/icones_tecnologias/github_vermelho.svg',
    imgHover: 'assets/icones_tecnologias/github_branco_pequeno.svg'
  },
  {
    link: document.querySelector('#link_github2'),
    logo: document.querySelector('#github2'),
    imgNormal: 'assets/icones_tecnologias/github_vermelho.svg',
    imgHover: 'assets/icones_tecnologias/github_branco_pequeno.svg'
  },
  {
    link: document.querySelector('#link_linkedin'),
    logo: document.querySelector('#linkedin'),
    imgNormal: 'assets/linkedin_vermelho.svg',
    imgHover: 'assets/linkedin_branco.svg'
  }
];

// Adiciona os eventos para todos os links do array
links.forEach(({ link, logo, imgNormal, imgHover }) => {
  link.addEventListener('mouseover', () => {
    logo.src = imgHover;
  });
  link.addEventListener('mouseout', () => {
    logo.src = imgNormal;
  });
});