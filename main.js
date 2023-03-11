var numeroSecreto = parseInt(Math.random()*11)
var maximoDeTentativas = 3    

      var chute = parseInt(document.getElementById('valor').value);
      var elementoResultado = document.getElementById("resultado");

  for (var i = 0; i< maximoDeTentativas; i++) {
 
          function Chutar() {
             var chute = parseInt(document.getElementById('valor').value);
             var elementoResultado = document.getElementById("resultado");
                
                    if (chute == numeroSecreto) {               
                     document.write ("<img src= 'https://c.tenor.com/Yp5Id0Q6yG0AAAAC/patrick-jane-the-mentalist.gif' class='thementalist' alt='' width='800' height='800' title='ACERTOU'> " + "ACERTOU!!!!" );
                      console.log("tentativa" + maximoDeTentativas )
                      console.log("i" + i )
                          }
                            else if (chute >10 || chute < 0 ) {
                              alert ("Número Inválido");  
                                 maximoDeTentativas--                                 }
                            else if (chute > numeroSecreto) { 
                              elementoResultado.innerHTML = "Um pouquinho menos" 
                              maximoDeTentativas--
                           } 
                             else if (chute < numeroSecreto) { 
                              elementoResultado.innerHTML = "Um pouquinho mais" 
                              maximoDeTentativas--
                           }     
            
                      if (maximoDeTentativas === 0) {
                       document.write( "<img src= 'https://i.gifer.com/origin/a3/a3a9d27a8c404c307e7aabfc6373c9a0.gif' class='thementalist' alt='' width ='700' height= '700' title='ERROU' id= 'errou' <div><legend> Acabaram suas 3 chances! O número secreto era: </legend></div> " + numeroSecreto)
                        }
             }
     } 
