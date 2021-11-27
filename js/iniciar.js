class Validator {
    constructor(){
      this.validations = [
        'data-min-length'
      ]
    }
  
    // iniciar validação de todos os campos
    validate(form) {
      
      //pegar inputs
      let inputs = form.getElementsByTagName('input');
  
      //transformo HTMLcoletion -> array
      let inputsArray = [...inputs];
    
      //loop nos inputs e validação mediante ao que for encontrado
      inputsArray.forEach(function(input){
      
        // loop em todas valiações existentes
        for(let i = 0; this.validations.length > i; i++) {
          if(input.getAttribute(this.validations[i]) != null) {
          }
        }
      }, this); 
    }
  }
  let form = document.getElementById("register-form");
  let submit = document.getElementById("btn-submit");
  
  let validator = new Validator();
  // evento que dispara as validações
  submit.addEventListener('click', function(e) {
    
    e.preventDefault();
    
    validator.validate(form)
    console.log('achou validação');
  });

  function minhaFuncao(){
    alert('Usuario cadastrado com sucesso!!');
  }
