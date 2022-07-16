import { Game } from "/Class/ClassGame.js";
import { arrayPregunta } from "/Archive/ObjetoPreguntas.js";
import { viewLogin } from "/View/viewLogin.js";
import { saveUser } from "../Archive/ingresoUser.js";

const juego1 = new Game(arrayPregunta);
let question, correct, option1, option2, option3;
let level = juego1.level;
let score = juego1.puntaje;

let gameContainer = document.querySelector(".game-container");
let questionContainer = document.querySelector(".question-container");
let answerContainer = document.querySelector(".answer-container");
let nivel = document.querySelector(".nivel-game");
let scoreUser = document.querySelector(".user-puntaje");

/*
@param level: Almacena el nivel actual de la pregunta y  
*/

function preguntaActualizada() {
  let nuevaPregunta = juego1.getRandomPregunta(level);
  question = nuevaPregunta.question;
  correct = nuevaPregunta.correct;
  option1 = nuevaPregunta.option1;
  option2 = nuevaPregunta.option2;
  option3 = nuevaPregunta.option3;
}
preguntaActualizada();

const GameContainer = document.createElement("div");
const container = document.querySelector("#container");

GameContainer.classList.add("game-container");
GameContainer.style.display = "none";

const titleContainer = document.createElement("div"); //-----este se agrega a game container
titleContainer.classList.add("title-container");

const title = document.createElement("h1");
title.classList.add("titulos");
title.innerHTML = "PREGUNTADOS";
titleContainer.append(title);

const buttonSalir = document.createElement("button");
buttonSalir.classList.add("Buttonsalir");
buttonSalir.innerHTML = "SALIR";
buttonSalir.addEventListener("click", () => {
  GameContainer.style.display = "none";
  viewLogin("block");
});

container.append(titleContainer, GameContainer);

export const viewGame = () => {
  const respuestas = [correct, option1, option2, option3];

  const questionContainer = document.createElement("div"); //--contenedor pregunta
  questionContainer.classList.add("question-container");

  const questionOne = document.createElement("p");
  questionOne.classList.add("questions");
  questionOne.innerText = `${question}`;

  questionContainer.append(questionOne);

  const nivel = document.createElement("h2");
  nivel.classList.add("nivel-game");
  nivel.innerHTML = `Nivel: ${level}`;

  const userPuntaje = document.createElement("h2");
  userPuntaje.classList.add("user-puntaje");
  userPuntaje.innerHTML = `Puntaje: ${score}`;

  const answerContainer = document.createElement("div");
  answerContainer.classList.add("answer-container");

  crearBotones(respuestas, answerContainer);
  GameContainer.append(
    questionContainer,
    answerContainer,
    nivel,
    userPuntaje,
    buttonSalir
  );
};

const keypressed = (event) => {
  const buttonPressed = event.target.innerHTML;
  validarAnswer(buttonPressed);
};

function validarAnswer(buttonPressed) {
  if (buttonPressed == correct) {
    if (level == 5) {
      alert("muy bien, ganaste");
      level = 1;
      score = 0;
      GameContainer.style.display = "none";
      viewLogin("block");
      actualizar();
      saveUser(50);
      return;
    }
    score += 10;
    level += 1;
    actualizar();
  } else {
    console.log("respuesta incorrecta");
    alert("Perdiste tonto");
    level = 1;
    puntajeactual(score);
    GameContainer.style.display = "none";
    viewLogin("block");
    actualizar();
    score = 0;
  }
}

export function actualizar() {
  gameContainer = document.querySelector(".game-container");
  questionContainer = document.querySelector(".question-container");
  answerContainer = document.querySelector(".answer-container");
  nivel = document.querySelector(".nivel-game");
  scoreUser = document.querySelector(".user-puntaje");

  if (questionContainer != null) {
    gameContainer.removeChild(questionContainer);
    gameContainer.removeChild(answerContainer);
    gameContainer.removeChild(nivel);
    gameContainer.removeChild(scoreUser);
  }
  preguntaActualizada();
  viewGame();
}

function randomAnswer(array) {
  let respuesta = [...array];

  let indiceActual = respuesta.length;
  let indicealeatorio;

  while (indiceActual !== 0) {
    indicealeatorio = Math.floor(Math.random() * indiceActual);
    indiceActual--;

    [respuesta[indiceActual], respuesta[indicealeatorio]] = [
      respuesta[indicealeatorio],
      respuesta[indiceActual],
    ];
  }

  return respuesta;
}

function crearBotones(answers, answerContainer) {
  randomAnswer(answers).forEach((element) => {
    let crearB = document.createElement("button");
    crearB.textContent = element;
    crearB.classList.add("buttons");
    crearB.addEventListener("click", keypressed);
    answerContainer.append(crearB);
  });
}

function puntajeactual(score) {
  if (score === 10) {
    saveUser(10);
  } else if (score == 20) {
    saveUser(20);
  } else if (score == 30) {
    saveUser(30);
  } else if (score == 40) {
    saveUser(40);
  }
}
