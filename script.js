let modeloCamisa;
let golaCamisa;
let tecidoCamisa;
let username;

let modelo, gola, tecido, imagem, identificador;

let objetoPost = {
	model: '',
	neck: '',
	material: '',
	image: '',
    owner: '',
	author: ''
}



    objetoPost.model = modelo;
    objetoPost.neck = gola;
    objetoPost.material = tecido;
    objetoPost.image = imagem;
    objetoPost.owner = nome;
    objetoPost.author = nome;


 function nomeUsuario(){
     
    username = prompt('qual o seu nome?')
    console.log(username);
}

 window.onload = nomeUsuario;
 

    function selecionarModelos(modeloClicado){
        const selecionarShirt = document.querySelector('.modelos .selecionado')

        if(selecionarShirt !== null){
            selecionarShirt.classList.remove('selecionado')
        };

            modeloClicado.classList.add('selecionado')

        modeloCamisa = modeloClicado
        ativarBotaoFecharPedido()
     }



    function selecionarGolas(golaClicada){
        const selecionarGola = document.querySelector('.golas .selecionado')

    if(selecionarGola !== null){
        selecionarGola.classList.remove('selecionado')
    };

        golaClicada.classList.add('selecionado')

    golaCamisa = golaClicada
    ativarBotaoFecharPedido()
     }

     function selecionarTecido(tecidoClicado){
        const selecionarTecido = document.querySelector('.tecido .selecionado')

        if(selecionarTecido !== null){
        selecionarTecido.classList.remove('selecionado')
    };

        tecidoClicado.classList.add('selecionado')

        tecidoCamisa = tecidoClicado
        ativarBotaoFecharPedido()
     }


     function ativarBotaoFecharPedido(){


        // verificar se camiseta foi selecionada
        if (modeloCamisa !== undefined){
            // verificar se a gola foi selecionada
            if (golaCamisa !== undefined){
                 // verificar se o tecido foi selecionada
                 if (tecidoCamisa !== undefined){
                    // liberar o botao fechar pedido
                    const botao = document.querySelector('.inputs .confirmar');
                    botao.classList.add('ativo');

                    botao.innerHTML = 'Fazer o Pedido';
                 }
            }
        }
    }

    // function msgConfirmacao(){
    //     if(ativarBotaoFecharPedido === true){
    //        return alert('encomenda confirmada')}
    // }

    function encomendarBlusa(){
       const promisse =  axios.get('https://mock-api.driven.com.br/api/v4/shirts-api/shirts');
       promisse.then(renderizarBlusas);
       promisse.catch(deuErro)
    }

    function renderizarBlusas(resposta){

        let roupas = resposta.data[i];

         const pedidos = document.querySelector('.pedidosFinalizados')

         pedidos.innerHTML += `
            <div class="cards" id='${roupas.id}'>
                <img src="${roupas.image}" alt="">
                <p> <strong>Criador: </strong>${roupas.owner} </p>
            </div>
         
         `
         ativarBotaoFecharPedido(   )

        //  let template;
        //  //let criador;
         
        //  for (i = 0 ; i < resposta.data.length; i++){
        //     // criador = resposta.data[i];
        //      template = `
        //         <div class="cards">
        //             <img src="${resposta.data[i].image}" alt="">
        //             <p> <strong>Criador: </strong>${resposta.data[i].owner} </p>
        //         </div>
        //      `
        //      pedidos.innerHTML += template; 
        //  }

    }

     function blusasEncomendadas(){
        objetoPost.owner;
        objetoPost.author;
        
        console.log('esse é o pedido');
        
        const promisse = axios.post('https://mock-api.driven.com.br/api/v4/shirts-api/shirts' , objetoPost)
        promisse.then(deuBoa)
        promisse.catch(deuErro)


    }

    function deuBoa(){
        alert('Seu pedido foi confirmado com sucesso!')
    }

     function deuErro(erro){
         alert('ops! não conseguimos realizar sua encomenda!')
     }

    // function blusasUsuarios(){
    //     const ultimosPedidos = document.querySelector('.pedidosFinalizados')
    
    //     ultimosPedidos.innerHTML += '';
    //     ultimosPedidos += `
    //     <div class="cards">
    //     <img src="${objetoPost.image}" alt="">
    //     <p> <strong>Criador: </strong>${objetoPost.author} </p>
    // </div>
    //     `
    // 