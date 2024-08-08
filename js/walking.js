let playerRun = document.getElementById('player-run');
let playerStop = document.getElementById('player-stop');

//eventos de controle para andar e pular
let walking = false;
let isJumping = false;

//altura default do pulo
let jumpHeigth = 150;

//função andar para direita
let andarDireita = () => {
    if (!isJumping) {
        playerRun.style.display = 'block';
        playerStop.style.display = 'none';
    };
};

// evento que verifica se a seta direita está pressionada, se sim, chama a função e muda a variável walking para true
document.addEventListener('keydown', (e) => {
    if (e.key == 'ArrowRight') {
        walking = true;
        andarDireita();
    };
});

// Evento de parar de andar
document.addEventListener('keyup', (e) => {
    if (e.key == 'ArrowRight') {
        walking = false;
        playerStop.style.display = 'block';
        playerRun.style.display = 'none';
    };
});

// PULO DO PERSONAGEM
document.addEventListener('keydown', (e) => {
    if (e.key == 'ArrowUp' && !isJumping) {
        isJumping = true;
        let position = 0;

        if (walking) {
            playerStop.style.display = 'none';
            playerRun.style.display = 'block';
        } else {
            playerStop.style.display = 'block';
            playerRun.style.display = 'none';
        };

        let upInterval = setInterval(() => {
            if (position >= jumpHeigth) {
                clearInterval(upInterval);

                let downInterval = setInterval(() => {
                    if (position <= 0) {
                        clearInterval(downInterval);
                        isJumping = false;
                    } else {
                        position -= 10;
                        playerStop.style.bottom = `${position}px`;
                        playerRun.style.bottom = `${position}px`;
                    }
                }, 20);

            } else {
                position += 10;
                playerStop.style.bottom = `${position}px`;
                playerRun.style.bottom = `${position}px`;
            }
        }, 20);
    };

    if (walking) {
        andarDireita();
    };
});