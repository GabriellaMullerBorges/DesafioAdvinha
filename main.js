const maximoDeTentativas = 3  

var numeroSecreto = parseInt(Math.random()*11)

var tentativas = 1;

function mostra(frase){
  alert(frase)
}
  
function chutar () {
   while (tentativas <= maximoDeTentativas){
    var chute = parseInt(document.getElementById('valor').value);
      if(chute != numeroSecreto) {
          mostra("Você ERROU, essa foi sua tentativa nº " +tentativas)
          if(tentativas==3){
            mostra("Número máximo de tentativas atingido")
          }
          tentativas++
          input.value=''            
      } else {
          mostra("Você ACERTOU")
          break;
      }
      
  }
}





     
