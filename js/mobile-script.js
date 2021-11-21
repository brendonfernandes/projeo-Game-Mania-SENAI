$(document).ready(function() {
  
  $("#carrossel img:eq(0)").addClass("banner-ativo").show()
  
  setInterval(slide, 5000)
  function slide() {
    if( $(".banner-ativo").next().length ) {
        $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show()
    } else {
      $(".banner-ativo").removeClass().hide()
       $("#carrossel img:eq(0)").addClass("banner-ativo").show()
    }
  }
    
})
// $('.carrossel').carrossel()


let pesquisa = document.getElementById("campo-pesquisa");

function pesquisarItem() {
    let pesquisaDigitada = pesquisa.value;
    console.log(pesquisaDigitada)
  }
function name(params) {
    
}
// $(document).ready(function() {
  
//   $("#espaco-jogos img:eq()").addClass("banner-ativo").show()
  
//   setInterval(slide, 2000)
//   function slide() {
//     if( $(".banner-ativo").next().length ) {
//         $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show()
//     } else {
//       $(".banner-ativo").removeClass().hide()
//        $("#espaco-jogos img:eq(2)").addClass("banner-ativo").show()
//     }
//   }
    
// })
// function renderizarJogos() {
//     let espaco = document.getElementById("espaco-jogos")
//     let listaDejogos = [
//         {   Imagem:"img/mortal kombat.jpg",
//             titulo:"botão-de-compra"

//         },
//         { titulo: "jogo numero dois",
//           descricao:"segundo jogo."
        
//         }
//     ]
    

    // let template = "";

    // for (let index = 0; index < listaDejogos.length; index++) {
    //     // const element = listaDejogos[index];

        
    //     console.log("renderizou")
        
    //     // template
    //     template += `<div class="jogos">
       
    //     </div>`
      
        
        
    //     espaco.innerHTML = template;
    // }
    // console.log(template)
  
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
  
  
  
  // function mostrarPopup() {
    //     window.alert("Hello World")
    // }
    
    // DOM - Document object Model
    //RegEx - Espressões Regulares