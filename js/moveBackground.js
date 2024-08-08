//ANIMAÇÃO PARA MOVIMENTAÇÃO DO TERRENO-------------------------------------------------------------------------------------------------

//terreno
let background = document.getElementById('background');

//posição inicial do terreno
let backgroundPositionX = 0;

//variável de controle de movimentação do terreno
let backgroundMovingLeft = false;

//evento que captura se a seta da direita foi pressionada
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        
        //indica que a movimentação está acontecendo
        backgroundMovingLeft = true;
    };
});

//evento que captura se a seta da direita foi solta
document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowRight') {
        
        //indica que a movimentação do terreno não está acontecendo
        backgroundMovingLeft = false;
    }
});

//função para movimentar o terreno
function moveBackground() {
    
    //verifica se a variável movingLeft é verdadeira
    if (backgroundMovingLeft) {
        
        //diminui a posição para mover para a esquerda
        backgroundPositionX -= 1;
        
        //aplica uma transformação no eixo X em que a posição X é igual a posição
        background.style.transform = `translateX(${backgroundPositionX}px)`;

        //verifica se o valor absoluto da variável positionX é maior ou igual a metade da largura da variável terrain
        //...se for, redefine a variável positionX para 0
        if (Math.abs(backgroundPositionX) >= background.offsetWidth / 1) {
            backgroundPositionX = 0;
        };
    };
    
    //chama a animação várias várias vezes e evita que bugs visuais ao reiniciar a posição do eixo X no terreno
    requestAnimationFrame(moveBackground);
};

//inicia o loop de animação
moveBackground();