// Criação do motor de física
var engine = Matter.Engine.create();

// Criação do mundo e de corpos
var boxA = Matter.Bodies.rectangle(400, 200, 80, 80);
var boxB = Matter.Bodies.rectangle(450, 50, 80, 80);
var ground = Matter.Bodies.rectangle(400, 610, 810, 10, { isStatic: true });

// Adiciona os corpos ao mundo
Matter.World.add(engine.world, [boxA, boxB, ground]);

// Inicializa o motor
Matter.Engine.run(engine);

// Renderização
var render = Matter.Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 800,
        heigth: 800,
        wireframes: false,
    }
});

Matter.Render.run(render);

//mover continuamente para direita--------------------------------------------------------------------------
//variável de controle para verificar se o objeto está se movendo para direita
let isMovingRight = false;

//função para iniciar o movimento
function startMovingRight(){
    isMovingRight = true;
    requestAnimationFrame(moveBoxARight);
};

//função para parar o movimento
function stopMovingRight(){
    isMovingRight = false;
};

//função para mover para direita
function moveBoxARight() {
    //verifica se a variável isMovingRight é verdadeira, se sim, seta a velocidade no eixo x para o objeto
    if(isMovingRight){
        Matter.Body.setVelocity(boxA, { x: 5, y: boxA.velocity.y });
        requestAnimationFrame(moveBoxARight);
    }else{
        //se não, zera a velocidade e o objeto para
        Matter.Body.setVelocity(boxA, { x: 0, y: boxA.velocity.y });
    };
};

//ouvintes de evento para movimentação à direita
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        startMovingRight();
    };
});
//para a movimentação
document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowRight') {
        stopMovingRight();
    };
});


//função para mover para esquerda---------------------------------------------------------------------------
function moveBoxALeft() {
    Matter.Body.setVelocity(boxA, { x: -5, y: boxA.velocity.y }); // Ajusta a velocidade em X
};
//evento para andar para esquerda usando a seta esquerda
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        moveBoxALeft();
    };
});


//função de pulo--------------------------------------------------------------------------------------------
function boxAJump() {
    Matter.Body.setVelocity(boxA, { x: boxA.velocity.x, y: -5 });
};
//evento para pular usando a seta para cima
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
        boxAJump();
    };
});