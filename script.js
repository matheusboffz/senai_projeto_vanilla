
/* ==================================================
   MINI GOLF
   VANILLA JAVASCRIPT
================================================== */


/* ==================================================
   ELEMENTOS HTML
================================================== */

const game =
    document.getElementById("game");

const ball =
    document.getElementById("ball");

const aimLine =
    document.getElementById("aim-line");

const hole =
    document.getElementById("hole");

const obstacles =
    document.querySelectorAll(".obstacle");


/* TELAS */

const menu =
    document.getElementById("menu");

const gameContainer =
    document.getElementById("gameContainer");

const levelComplete =
    document.getElementById("levelComplete");

const victory =
    document.getElementById("victory");


/* BOTÕES */

const startButton =
    document.getElementById("startButton");

const restartButton =
    document.getElementById("restart");

const menuButton =
    document.getElementById("menuButton");

const nextLevel =
    document.getElementById("nextLevel");

const playAgain =
    document.getElementById("playAgain");

const backToMenu =
    document.getElementById("backToMenu");


/* INFORMAÇÕES */

const shotsText =
    document.getElementById("shots");

const levelText =
    document.getElementById("level");

const parText =
    document.getElementById("par");

const scoreText =
    document.getElementById("score");

const message =
    document.getElementById("message");


/* RESULTADO */

const resultShots =
    document.getElementById("resultShots");

const resultPar =
    document.getElementById("resultPar");

const resultScore =
    document.getElementById("resultScore");

const levelResult =
    document.getElementById("levelResult");


/* VITÓRIA */

const finalScore =
    document.getElementById("finalScore");

const finalMessage =
    document.getElementById("finalMessage");

const stars =
    document.getElementById("stars");


/* ==================================================
   VARIÁVEIS DO JOGO
================================================== */

let ballX = 100;

let ballY = 250;

let velocityX = 0;

let velocityY = 0;

let shots = 0;

let totalScore = 0;

let currentLevel = 1;

let aiming = false;

let gameOver = false;

let audioStarted = false;

const ballRadius = 11;


/* ==================================================
   CONFIGURAÇÃO DAS FASES
================================================== */

const levels = {

    /* =========================
       FASE 1
    ========================== */

    1: {

        par: 3,

        ball: {
            x: 100,
            y: 250
        },

        hole: {
            x: 780,
            y: 250
        },

        obstacles: [

            {
                x: 300,
                y: 120,
                width: 180,
                height: 35
            },

            {
                x: 500,
                y: 250,
                width: 35,
                height: 180
            },

            {
                x: 300,
                y: 390,
                width: 140,
                height: 35
            }

        ]

    },


    /* =========================
       FASE 2
    ========================== */

    2: {

        par: 4,

        ball: {
            x: 100,
            y: 420
        },

        hole: {
            x: 800,
            y: 90
        },

        obstacles: [

            {
                x: 220,
                y: 120,
                width: 35,
                height: 250
            },

            {
                x: 420,
                y: 60,
                width: 220,
                height: 35
            },

            {
                x: 620,
                y: 200,
                width: 35,
                height: 230
            }

        ]

    },


    /* =========================
       FASE 3
    ========================== */

    3: {

        par: 5,

        ball: {
            x: 100,
            y: 80
        },

        hole: {
            x: 800,
            y: 430
        },

        obstacles: [

            {
                x: 180,
                y: 170,
                width: 400,
                height: 35
            },

            {
                x: 300,
                y: 330,
                width: 35,
                height: 150
            },

            {
                x: 600,
                y: 150,
                width: 35,
                height: 250
            }

        ]

    }

};


/* ==================================================
   SISTEMA DE SOM
================================================== */

const audioContext =
    new (
        window.AudioContext ||
        window.webkitAudioContext
    )();


function playSound(type) {

    if (!audioStarted) {

        audioContext.resume();

        audioStarted = true;
    }


    /* SOM DA TACADA */

    if (type === "hit") {

        const oscillator =
            audioContext.createOscillator();

        const gain =
            audioContext.createGain();


        oscillator.connect(gain);

        gain.connect(
            audioContext.destination
        );


        oscillator.frequency.value = 180;

        oscillator.type = "triangle";


        gain.gain.setValueAtTime(
            0.15,
            audioContext.currentTime
        );


        gain.gain.exponentialRampToValueAtTime(
            0.01,
            audioContext.currentTime + 0.12
        );


        oscillator.start();


        oscillator.stop(
            audioContext.currentTime + 0.12
        );
    }


    /* SOM DE COLISÃO */

    if (type === "wall") {

        const oscillator =
            audioContext.createOscillator();

        const gain =
            audioContext.createGain();


        oscillator.connect(gain);

        gain.connect(
            audioContext.destination
        );


        oscillator.frequency.value = 100;

        oscillator.type = "square";


        gain.gain.setValueAtTime(
            0.08,
            audioContext.currentTime
        );


        gain.gain.exponentialRampToValueAtTime(
            0.01,
            audioContext.currentTime + 0.08
        );


        oscillator.start();


        oscillator.stop(
            audioContext.currentTime + 0.08
        );
    }


    /* SOM DO BURACO */

    if (type === "hole") {

        const oscillator =
            audioContext.createOscillator();

        const gain =
            audioContext.createGain();


        oscillator.connect(gain);

        gain.connect(
            audioContext.destination
        );


        oscillator.type = "sine";


        oscillator.frequency.setValueAtTime(
            500,
            audioContext.currentTime
        );


        oscillator.frequency.exponentialRampToValueAtTime(
            900,
            audioContext.currentTime + 0.3
        );


        gain.gain.setValueAtTime(
            0.2,
            audioContext.currentTime
        );


        gain.gain.exponentialRampToValueAtTime(
            0.01,
            audioContext.currentTime + 0.5
        );


        oscillator.start();


        oscillator.stop(
            audioContext.currentTime + 0.5
        );
    }


    /* MÚSICA DE VITÓRIA */

    if (type === "victory") {

        const notes = [
            523,
            659,
            784,
            1046
        ];


        notes.forEach(
            (frequency, index) => {

                const oscillator =
                    audioContext.createOscillator();

                const gain =
                    audioContext.createGain();


                oscillator.connect(gain);

                gain.connect(
                    audioContext.destination
                );


                oscillator.frequency.value =
                    frequency;

                oscillator.type = "sine";


                const startTime =
                    audioContext.currentTime +
                    index * 0.15;


                gain.gain.setValueAtTime(
                    0.15,
                    startTime
                );


                gain.gain.exponentialRampToValueAtTime(
                    0.01,
                    startTime + 0.3
                );


                oscillator.start(
                    startTime
                );


                oscillator.stop(
                    startTime + 0.3
                );

            }
        );
    }

}


/* ==================================================
   INICIAR JOGO
================================================== */

function startGame() {

    menu.classList.add("hidden");

    gameContainer.classList.remove("hidden");

    currentLevel = 1;

    totalScore = 0;

    loadLevel();

}


/* ==================================================
   CARREGAR FASE
================================================== */

function loadLevel() {

    const data =
        levels[currentLevel];


    /* RESET */

    shots = 0;

    gameOver = false;

    aiming = false;

    velocityX = 0;

    velocityY = 0;


    /* BOLA */

    ballX =
        data.ball.x;

    ballY =
        data.ball.y;


    /* INFORMAÇÕES */

    levelText.textContent =
        currentLevel;

    shotsText.textContent =
        shots;

    parText.textContent =
        data.par;

    scoreText.textContent =
        totalScore;


    message.textContent =
        "Boa sorte! Acerte o buraco.";


    /* BURACO */

    hole.style.left =
        data.hole.x + "px";

    hole.style.top =
        data.hole.y + "px";


    /* OBSTÁCULOS */

    data.obstacles.forEach(
        (obstacle, index) => {

            obstacles[index].style.left =
                obstacle.x + "px";

            obstacles[index].style.top =
                obstacle.y + "px";

            obstacles[index].style.width =
                obstacle.width + "px";

            obstacles[index].style.height =
                obstacle.height + "px";

            obstacles[index].style.display =
                "block";

        }
    );


    updateBall();


    levelComplete.classList.add(
        "hidden"
    );

    victory.classList.add(
        "hidden"
    );

}


/* ==================================================
   ATUALIZAR BOLA
================================================== */

function updateBall() {

    ball.style.left =
        ballX + "px";

    ball.style.top =
        ballY + "px";

}


/* ==================================================
   POSIÇÃO DO MOUSE
================================================== */

function getMousePosition(event) {

    const rect =
        game.getBoundingClientRect();


    return {

        x:
            event.clientX -
            rect.left,

        y:
            event.clientY -
            rect.top

    };

}


/* ==================================================
   COMEÇAR A MIRAR
================================================== */

game.addEventListener(
    "mousedown",
    function(event) {

        if (gameOver)
            return;


        const speed =
            Math.sqrt(
                velocityX *
                velocityX +

                velocityY *
                velocityY
            );


        /* NÃO PODE BATER ENQUANTO A BOLA ESTÁ ANDANDO */

        if (speed > 0.15)
            return;


        const mouse =
            getMousePosition(event);


        const distance =
            Math.sqrt(

                Math.pow(
                    mouse.x - ballX,
                    2
                )

                +

                Math.pow(
                    mouse.y - ballY,
                    2
                )

            );


        /* PRECISA CLICAR PERTO DA BOLA */

        if (distance < 45) {

            aiming = true;

            aimLine.style.display =
                "block";


            drawAimLine(event);

        }

    }
);


/* ==================================================
   MOVER MOUSE
================================================== */

game.addEventListener(
    "mousemove",
    function(event) {

        if (!aiming)
            return;


        drawAimLine(event);

    }
);


/* ==================================================
   DESENHAR MIRA
================================================== */

function drawAimLine(event) {

    const mouse =
        getMousePosition(event);


    const dx =
        ballX - mouse.x;

    const dy =
        ballY - mouse.y;


    const power =
        Math.sqrt(
            dx * dx +
            dy * dy
        );


    const angle =
        Math.atan2(
            dy,
            dx
        );


    aimLine.style.left =
        ballX + "px";


    aimLine.style.top =
        ballY + "px";


    aimLine.style.width =
        Math.min(
            power,
            200
        ) + "px";


    aimLine.style.transform =
        `rotate(${angle}rad)`;

}


/* ==================================================
   SOLTAR MOUSE
================================================== */

game.addEventListener(
    "mouseup",
    function(event) {

        if (!aiming)
            return;


        aiming = false;


        aimLine.style.display =
            "none";


        const mouse =
            getMousePosition(event);


        const dx =
            ballX - mouse.x;


        const dy =
            ballY - mouse.y;


        let power =
            Math.sqrt(
                dx * dx +
                dy * dy
            );


        /* FORÇA MÁXIMA */

        power =
            Math.min(
                power,
                200
            );


        /* TACADA MUITO PEQUENA */

        if (power < 10)
            return;


        const angle =
            Math.atan2(
                dy,
                dx
            );


        const force =
            power * 0.055;


        velocityX =
            Math.cos(angle) *
            force;


        velocityY =
            Math.sin(angle) *
            force;


        shots++;


        shotsText.textContent =
            shots;


        message.textContent =
            "A bola está rolando...";


        playSound("hit");

    }
);


/* ==================================================
   LOOP PRINCIPAL
================================================== */

function gameLoop() {

    if (!gameOver) {

        /* MOVIMENTO */

        ballX += velocityX;

        ballY += velocityY;


        /* ATRITO */

        velocityX *= 0.985;

        velocityY *= 0.985;


        /* COLISÕES */

        checkWalls();

        checkObstacles();

        checkHole();


        /* ATUALIZAR */

        updateBall();

    }


    requestAnimationFrame(
        gameLoop
    );

}


gameLoop();


/* ==================================================
   COLISÃO COM PAREDES
================================================== */

function checkWalls() {

    const width =
        game.clientWidth;

    const height =
        game.clientHeight;


    /* ESQUERDA */

    if (
        ballX - ballRadius <= 0
    ) {

        ballX =
            ballRadius;

        velocityX *= -0.7;

        playSound("wall");

    }


    /* DIREITA */

    if (
        ballX + ballRadius >= width
    ) {

        ballX =
            width -
            ballRadius;

        velocityX *= -0.7;

        playSound("wall");

    }


    /* CIMA */

    if (
        ballY - ballRadius <= 0
    ) {

        ballY =
            ballRadius;

        velocityY *= -0.7;

        playSound("wall");

    }


    /* BAIXO */

    if (
        ballY + ballRadius >= height
    ) {

        ballY =
            height -
            ballRadius;

        velocityY *= -0.7;

        playSound("wall");

    }

}


/* ==================================================
   COLISÃO COM OBSTÁCULOS
================================================== */

function checkObstacles() {

    const data =
        levels[currentLevel];


    data.obstacles.forEach(
        obstacle => {

            const x =
                obstacle.x;

            const y =
                obstacle.y;

            const width =
                obstacle.width;

            const height =
                obstacle.height;


            /* PONTO MAIS PRÓXIMO */

            const closestX =
                Math.max(
                    x,
                    Math.min(
                        ballX,
                        x + width
                    )
                );


            const closestY =
                Math.max(
                    y,
                    Math.min(
                        ballY,
                        y + height
                    )
                );


            const distanceX =
                ballX -
                closestX;


            const distanceY =
                ballY -
                closestY;


            const distance =
                Math.sqrt(
                    distanceX *
                    distanceX +

                    distanceY *
                    distanceY
                );


            if (
                distance <
                ballRadius
            ) {

                /* COLISÃO HORIZONTAL */

                if (
                    Math.abs(distanceX) >
                    Math.abs(distanceY)
                ) {

                    velocityX *= -0.7;


                    if (
                        distanceX > 0
                    ) {

                        ballX =
                            x +
                            width +
                            ballRadius;

                    } else {

                        ballX =
                            x -
                            ballRadius;

                    }

                }


                /* COLISÃO VERTICAL */

                else {

                    velocityY *= -0.7;


                    if (
                        distanceY > 0
                    ) {

                        ballY =
                            y +
                            height +
                            ballRadius;

                    } else {

                        ballY =
                            y -
                            ballRadius;

                    }

                }


                playSound("wall");

            }

        }
    );

}


/* ==================================================
   VERIFICAR BURACO
================================================== */

function checkHole() {

    const data =
        levels[currentLevel];


    const holeX =
        data.hole.x;

    const holeY =
        data.hole.y;


    const distance =
        Math.sqrt(

            Math.pow(
                ballX - holeX,
                2
            )

            +

            Math.pow(
                ballY - holeY,
                2
            )

        );


    /* BOLA ENTROU */

    if (
        distance < 20
    ) {

        const speed =
            Math.sqrt(

                velocityX *
                velocityX

                +

                velocityY *
                velocityY

            );


        /* PRECISA ESTAR DEVAGAR */

        if (
            speed < 2.5
        ) {

            finishLevel();

        }

    }

}


/* ==================================================
   TERMINAR FASE
================================================== */

function finishLevel() {

    gameOver = true;


    velocityX = 0;

    velocityY = 0;


    const data =
        levels[currentLevel];


    ballX =
        data.hole.x;

    ballY =
        data.hole.y;


    updateBall();


    playSound("hole");


    /* ==================================================
       SISTEMA DE PONTUAÇÃO

       Par  -> +1000
       1 abaixo do par -> +500 bônus
       2 abaixo -> +1000
       Acima do par -> perde pontos
    ================================================== */

    let points =
        1000;


    const difference =
        data.par - shots;


    if (
        difference > 0
    ) {

        points +=
            difference *
            500;

    }


    if (
        difference < 0
    ) {

        points +=
            difference *
            200;

    }


    /* GARANTE QUE NÃO FIQUE NEGATIVO */

    points =
        Math.max(
            points,
            100
        );


    totalScore +=
        points;


    scoreText.textContent =
        totalScore;


    /* RESULTADO */

    resultShots.textContent =
        shots;

    resultPar.textContent =
        data.par;

    resultScore.textContent =
        points;


    /* TEXTO */

    if (
        shots < data.par
    ) {

        levelResult.textContent =
            "🔥 Excelente! Você ficou abaixo do Par!";

    }

    else if (
        shots === data.par
    ) {

        levelResult.textContent =
            "⛳ Perfeito! Você fez exatamente o Par!";

    }

    else {

        levelResult.textContent =
            "👍 Fase concluída! Tente melhorar sua pontuação.";

    }


    /* ÚLTIMA FASE */

    if (
        currentLevel === 3
    ) {

        nextLevel.textContent =
            "Ver resultado final 🏆";

    }

    else {

        nextLevel.textContent =
            "Próxima fase →";

    }


    setTimeout(
        () => {

            levelComplete.classList.remove(
                "hidden"
            );

        },
        600
    );

}


/* ==================================================
   PRÓXIMA FASE
================================================== */

nextLevel.addEventListener(
    "click",
    function() {

        if (
            currentLevel === 3
        ) {

            showVictory();

            return;

        }


        currentLevel++;


        levelComplete.classList.add(
            "hidden"
        );


        loadLevel();

    }
);


/* ==================================================
   TELA DE VITÓRIA
================================================== */

function showVictory() {

    levelComplete.classList.add(
        "hidden"
    );

    gameContainer.classList.add(
        "hidden"
    );


    finalScore.textContent =
        totalScore;


    /* ESTRELAS */

    if (
        totalScore >= 5000
    ) {

        stars.textContent =
            "⭐⭐⭐";

        finalMessage.textContent =
            "Lenda do Golf! Seu desempenho foi incrível!";

    }

    else if (
        totalScore >= 3500
    ) {

        stars.textContent =
            "⭐⭐";

        finalMessage.textContent =
            "Muito bom! Você jogou muito bem!";

    }

    else {

        stars.textContent =
            "⭐";

        finalMessage.textContent =
            "Boa partida! Continue praticando para melhorar.";

    }


    victory.classList.remove(
        "hidden"
    );


    playSound("victory");

}


/* ==================================================
   REINICIAR FASE
================================================== */

restartButton.addEventListener(
    "click",
    function() {

        loadLevel();

    }
);


/* ==================================================
   VOLTAR AO MENU
================================================== */

menuButton.addEventListener(
    "click",
    function() {

        gameContainer.classList.add(
            "hidden"
        );

        levelComplete.classList.add(
            "hidden"
        );

        victory.classList.add(
            "hidden"
        );

        menu.classList.remove(
            "hidden"
        );

    }
);


/* ==================================================
   JOGAR NOVAMENTE
================================================== */

playAgain.addEventListener(
    "click",
    function() {

        victory.classList.add(
            "hidden"
        );

        gameContainer.classList.remove(
            "hidden"
        );


        currentLevel = 1;

        totalScore = 0;


        loadLevel();

    }
);


/* ==================================================
   VOLTAR AO MENU PELA VITÓRIA
================================================== */

backToMenu.addEventListener(
    "click",
    function() {

        victory.classList.add(
            "hidden"
        );

        gameContainer.classList.add(
            "hidden"
        );

        menu.classList.remove(
            "hidden"
        );

    }
);


/* ==================================================
   COMEÇAR PELO MENU
================================================== */

startButton.addEventListener(
    "click",
    function() {

        startGame();

    }
);


/* ==================================================
   PREVENIR MENU DE CONTEXTO
================================================== */

game.addEventListener(
    "contextmenu",
    function(event) {

        event.preventDefault();

    }
);

