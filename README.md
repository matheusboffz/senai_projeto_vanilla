# senai_projeto_vanilla
🏌️ Mini Golf - Vanilla JavaScript

📌 Sobre o projeto

Este projeto consiste em um jogo de Mini Golf desenvolvido utilizando apenas tecnologias web básicas, principalmente HTML, CSS e JavaScript puro (Vanilla JS).

A ideia do projeto surgiu como uma forma de transformar os conhecimentos estudados em programação web em uma aplicação interativa. Em vez dedesenvolver apenas uma página estática, o objetivo foi criar um pequeno jogo que tivesse interação com o usuário, movimentação, colisões,sistema de fases e pontuação.

🎯 Objetivo

O principal objetivo é criar uma experiência simples e divertida de MiniGolf, na qual o jogador precisa controlar a força e a direção da tacadapara fazer a bola chegar ao buraco utilizando o menor número possível detacadas.

Além da parte visual, o projeto busca demonstrar como o JavaScript podeser utilizado para criar interações e mecânicas de jogos diretamenteno navegador, sem a utilização de engines ou frameworks.

💡 Por que este projeto foi desenvolvido?

Este projeto foi desenvolvido principalmente para colocar em prática conhecimentos de desenvolvimento web e lógica de programação.

Um jogo de golf foi escolhido porque, apesar de possuir uma proposta simples, permite trabalhar vários conceitos diferentes ao mesmo tempo:

Física básica, colisão com obstáculos, sistema de pontuação.

Dessa forma, o projeto funciona tanto como um jogo simples quanto comouma forma de demonstrar conhecimentos de programação.

🕹️ Como jogar

O objetivo é colocar a bola dentro do buraco.

Controles

O jogo utiliza o mouse, clique próximo da bola e arraste o mouse na direção oposta da bola para lançar ela, quanto mais puxa mais forte. Solte o botão para fazer a tacada, tente completar com menos tacadas possíveis utilizando obstáculos para ajudar a controlar o caminho da bola.

Objetivo

Completar as 3 fases e conseguir a maior pontuação possível.

🏆 Sistema de fases

O jogo possui três fases diferentes.

⛳ Fase 1

A primeira fase funciona como uma introdução às mecânicas do jogo.

Par: 3

Obstáculos simples

Caminho relativamente direto

Objetivo de apresentar a mecânica de mira e força

⛳ Fase 2

A segunda fase aumenta a dificuldade.

Par: 4

Mais obstáculos

Maior necessidade de controlar a direção

Exige mais planejamento das tacadas

⛳ Fase 3

A terceira fase é a mais difícil.

Par: 5

Obstáculos posicionados de forma mais complexa

Maior necessidade de utilizar paredes e ângulos

Funciona como desafio final

⭐ Sistema de pontuação

A pontuação considera o desempenho do jogador em relação ao Par da fase.

O jogo começa cada fase com uma pontuação base.

Quando o jogador termina uma fase:

Fazer abaixo do Par gera bônus, fazer exatamente o Par gera uma boa pontuação, fazer acima do Par reduz o bônus recebido;

A pontuação das fases é acumulada.

Ao terminar as três fases, o jogador recebe uma classificação finalbaseada na pontuação acumulada.

Classificação

⭐ Bom desempenho

⭐⭐ Muito bom desempenho

⭐⭐⭐ Excelente desempenho

🧱 Colisão com obstáculos ou paredes;

🕳️ Bola entrando no buraco;

🏆 Vitória final.

Isso também foi utilizado como forma de explorar recursos disponíveisdiretamente no navegador.

🎨 Interface

A interface foi desenvolvida utilizando HTML e CSS.

O projeto possui diferentes telas:

🏠 Menu inicial

Apresenta:

Nome do jogo;

Botão para iniciar;

Instruções básicas;

Objetivo do jogo.

🎮 Tela de jogo

Apresenta:

Campo de golf;

Bola;

Buraco;

Bandeira;

Obstáculos;

Número da fase;

Número de tacadas;

Par;

Pontuação;

Instruções;

Botões de reiniciar e voltar ao menu.

🏆 Tela de conclusão da fase

Mostra:

Quantidade de tacadas;

Par da fase;

Pontos conquistados;

Mensagem de desempenho;

Botão para avançar para a próxima fase.

🥇 Tela de vitória

Depois de completar as três fases, o jogador recebe:

Pontuação final;

Quantidade de estrelas;

Mensagem de desempenho;

Opção para jogar novamente;

Opção para voltar ao menu.

💻 Tecnologias utilizadas

O projeto foi desenvolvido utilizando:

HTML5

Utilizado para construir a estrutura das telas e dos elementos do jogo.

CSS3

Utilizado para:

Layout;

Cores;

Animações;

Botões;

Responsividade;

Estilização do campo;

Menus;

Telas de vitória.

JavaScript Vanilla

Utilizado para toda a lógica do jogo, incluindo:

Movimentação da bola;

Eventos do mouse;

Sistema de mira;

Força da tacada;

Colisões;

Fases;

Pontuação;

Sistema de Par;

Estados das telas;

Vitória.

O projeto não utiliza frameworks ou bibliotecas externas de JavaScript.

⚙️ Física da bola

O movimento da bola utiliza uma implementação simples de física.

A cada atualização do jogo, a posição é alterada de acordo com a velocidade.

Também existe um sistema de atrito, que diminui gradualmente a velocidade da bola até ela parar.

A força da tacada é calculada de acordo com a distância entre a bola e a posição do mouse.

🧱 Sistema de colisões

A bola pode colidir com:

Bordas do campo e obstáculos.

Quando ocorre uma colisão, a velocidade da bola é invertida parcialmente para criar o efeito de quique.

🗂️ Estrutura do projeto

mini-golf/
│
├── index.html
├── style.css
└── script.js

▶️ Como executar

Não é necessário instalar nenhuma biblioteca ou dependência.

Opção 1 --- Abrir diretamente

Basta abrir o arquivo:

index.html

em um navegador.

📚 O que foi aprendido

O desenvolvimento deste projeto permitiu praticar diversos conceitos dedesenvolvimento web, principalmente:

Estruturação de páginas com HTML;

Estilização com CSS;

JavaScript Vanilla;

🚀 Possíveis melhorias futuras

O projeto pode continuar sendo desenvolvido e receber novasfuncionalidades.

Algumas ideias são:

Mais fases;

Sistema de recordes;

Ranking de melhores pontuações;

Diferentes tipos de campo;

Obstáculos móveis;

Água e áreas de areia;

Diferentes skins para a bola;

Sistema de níveis de dificuldade;

Música de fundo;

Mais efeitos sonoros;

Sistema de partículas;

Power-ups;

Modo multiplayer;

Salvamento da pontuação utilizando localStorage.

🎓 Conclusão

O Mini Golf foi desenvolvido como uma maneira prática de aplicarconceitos de programação web em um projeto interativo.

O projeto demonstra que, mesmo sem utilizar frameworks ou engines dejogos, é possível criar aplicações interativas utilizando apenas as ferramentas disponíveis no navegador.

👨‍💻 Autor

Matheus Boff

Projeto desenvolvido para fins acadêmicos e de aprendizado emdesenvolvimento de sistemas.

Tecnologias

HTML • CSS • JavaScript Vanilla 

⭐ Obrigado por jogar!
