function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if(elemento && elemento.localName === 'audio'){
       elemento.play();
    }

    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

//para
for(let contador = 0; contador < ListaDeTeclas.length; contador++) {

    const tecla = ListaDeTeclas[contador];
    const Instrumento = tecla.classList[1];
    const IdAudio = `#som_${Instrumento}`; //template string
    //console.log(contador);

    tecla.onclick = function(){
        tocaSom(IdAudio);
    }

    tecla.onkeydown = function(evento){
        if (evento.code === "Enter" ||
        evento.code === "Space"){
        tecla.classList.add('ativa');    
        }     
    }
 
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}

