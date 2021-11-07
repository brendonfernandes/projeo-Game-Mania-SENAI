let pesquisa = document.getElementById("campo-pesquisa");




// function mostrarPopup() {
//     window.alert("Hello World")
// }

// DOM - Document object Model
//RegEx - Espressões Regulares

function pesquisarItem() {
    let pesquisaDigitada = pesquisa.value;
    console.log(pesquisaDigitada)
}
// function name(params) {
    
// }
// function renderizarJogos() {
//     let espaco = document.getElementById("espaco-jogos")
//     let listaDeJogos = [
//         {   Imagem:"img/mortal kombat.jpg",
//             titulo:"botão-de-compra"

//         },
//         {titulo: "jogo numero dois",
//         descricao:"segundo jogo."
        
//         }
//     ]
    

//     let template = "";
//     for (let index = 0; index < listaDeJogos.length; index++) {
//         const element = listaDeJogos[index];
        
//         // console.log("renderizou")

//         // template
//         template += `<div class="image-seção">
//             <img src="img/mortal kombat.jpeg"/>
//             <img src="img/the last of us.jpeg"/>
//             <img src="img/uncharted.jpeg"/>
//             <img src="img/spider-man.jpg"/>
//             <img src="img/resident evil.jpeg"/>
//             <img src="img/god of war.jpeg"/>
//             <a href="#">comprar</a>
//         </div>`
        

//         espaco.innerHTML = template;
//     }
//     console.log(template)
// }
class MobileScript {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileScript = new MobileScript(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileScript.init();