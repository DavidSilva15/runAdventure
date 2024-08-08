//ANIMAÇÃO PARA MOVIMENTAÇÃO DO TERRENO-------------------------------------------------------------------------------------------------

//terreno
let terrain = document.getElementById('terrain');

//posição inicial do terreno
let positionX = 0;

//variável de controle de movimentação do terreno
let movingLeft = false;

//evento que captura se a seta da direita foi pressionada
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        
        //indica que a movimentação está acontecendo
        movingLeft = true;
    };
});

//evento que captura se a seta da direita foi solta
document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowRight') {
        
        //indica que a movimentação do terreno não está acontecendo
        movingLeft = false;
    }
});

//função para movimentar o terreno
function moveTerrain() {
    
    //verifica se a variável movingLeft é verdadeira
    if (movingLeft) {
        
        //diminui a posição para mover para a esquerda
        positionX -= 3;
        
        //aplica uma transformação no eixo X em que a posição X é igual a posição
        terrain.style.transform = `translateX(${positionX}px)`;

        //verifica se o valor absoluto da variável positionX é maior ou igual a metade da largura da variável terrain
        //...se for, redefine a variável positionX para 0
        if (Math.abs(positionX) >= terrain.offsetWidth / 2) {
            positionX = 0;
        };
    };
    
    //chama a animação várias várias vezes e evita que bugs visuais ao reiniciar a posição do eixo X no terreno
    requestAnimationFrame(moveTerrain);
};

//inicia o loop de animação
moveTerrain();