const maximoDeTentativas = 3  

var numeroSecreto = parseInt(Math.random()*11)

var chute = parseInt(document.getElementById('valor').value);

var elementoResultado = document.getElementById("resultado");


function alerta(frase){
  alert(frase)
}
  
function chutar () {
  if(chute == numeroSecreto) {
  alerta("Você acertou")
  }

  if(chute != numeroSecreto){
  alerta ("Você errou, o número era " + numeroSecreto)
  }
}



     
