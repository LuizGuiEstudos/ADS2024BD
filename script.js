const lampOn = document.getElementById( 'btnLampOn' );
const lampOff = document.getElementById( 'btnLampOff' );

const placeLamp = document.getElementById( 'placeLamp' );
const urlImgLampLigada = './resources/lampadaLigada.jpg';
const urlImgLampDesligada = './resources/lampadaDesligada.jpg';



function ligar() {
    placeLamp.src = urlImgLampLigada;
}
function desligar() {
    placeLamp.src = urlImgLampDesligada
}

lampOn.addEventListener( 'click', ligar )
lampOff.addEventListener( 'click', desligar )
