let modeloCamisa;
let golaCamisa;
let tecidoCamisa;


function selectShirt(modeloClicado){
    const selecionarShirt = document.querySelector('.tShirt .selecionado')

    if(selecionarShirt !== null){
        selecionarShirt.classList.remove('selecionado')
    }; 
    
        modeloClicado.classList.add('selecionado')

    modeloCamisa = modeloClicado
    ativarBotaoFecharPedido()
     }

    

    function selecionarGolas(golaClicada){
        const selecionarGola = document.querySelector('.tShirt .selecionado')

    if(selecionarGola !== null){
        selecionarGola.classList.remove('selecionado')
    }; 
    
        golaClicada.classList.add('selecionado')

    golaCamisa = golaClicada
    ativarBotaoFecharPedido()
     }
    
     function selecionarTecido(tecidoClicado){
        const selecionarTecido = document.querySelector('.tShirt .selecionado')

    if(selecionarTecido !== null){
        selecionarTecido.classList.remove('selecionado')
    }; 
    
        tecidoClicado.classList.add('selecionado')

    tecidoCamisa = tecidoClicado
    ativarBotaoFecharPedido()
     }

     function ativarBotaoFecharPedido(){

        console.log(modeloCamisa, golaCamisa, tecidoCamisa);
    
        // verificar se o prato foi selecionado
        if (modeloCamisa !== undefined){
            // verificar se a bebida foi selecionada
            if (golaCamisa !== undefined){
                 // verificar se a sobremesa foi selecionada
                 if (tecidoCamisa !== undefined){
                    // liberar o botao fechar pedido
                    const botao = document.querySelector('.inputs .confirmar');
                    botao.classList.add('ativo');
    
                    botao.innerHTML = 'Fazer o Pedido';
                 }
            }
        }
        
    }