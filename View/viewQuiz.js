import { Game } from "/Class/ClassGame.js";
import { arrayPregunta } from "/Archive/ObjetoPreguntas.js";

const juego1 = new Game(arrayPregunta);
let question, correct, option1, option2, option3;
let level = juego1.level;
function preguntaActualizada() {
  let nuevaPregunta = juego1.getRandomPregunta(level);
  question = nuevaPregunta.question;
  correct = nuevaPregunta.correct;
  option1 = nuevaPregunta.option1;
  option2 = nuevaPregunta.option2;
  option3 = nuevaPregunta.option3;
}
preguntaActualizada();

const container = document.querySelector("#container");
const GameContainer = document.createElement("div");
GameContainer.classList.add("game-container");

const titleContainer = document.createElement("div"); //-----este se agrega a game container
titleContainer.classList.add("title-container");

const title = document.createElement("h1");
title.classList.add("titulos");
title.innerHTML = "PREGUNTADOS";
titleContainer.append(title);

GameContainer.append(titleContainer);
container.append(GameContainer);

export const viewGame = () => {
  const respuestas = [correct, option1, option2, option3];

  const questionContainer = document.createElement("div"); //--contenedor pregunta
  questionContainer.classList.add("question-container");

  const questionOne = document.createElement("p");
  questionOne.classList.add("questions");
  questionOne.innerText = `prueba preguna ${question}`;

  questionContainer.append(questionOne);

  //pregunta uno boton y texto

  const answerContainer = document.createElement("div");
  answerContainer.classList.add("answer-container");

  crearBotones(respuestas, answerContainer);
  GameContainer.append(questionContainer, answerContainer);
};

const keypressed = (event) => {
  const buttonPressed = event.target.innerHTML;
  console.log(buttonPressed);
  validarAnswer(buttonPressed);
};

function validarAnswer(buttonPressed) {
  if (buttonPressed == correct) {
    if (level == 5) {
      level = 1;
      actualizar();
      return;
    }

    level += 1;
    actualizar();
  } else {
    console.log("respuesta incorrecta");
    alert("Perdiste tonto");
    level = 1;
    actualizar();
  }
}
function actualizar() {
  let gameContainer = document.querySelector(".game-container");
  let questionContainer = document.querySelector(".question-container");
  let answerContainer = document.querySelector(".answer-container");

  gameContainer.removeChild(questionContainer);
  gameContainer.removeChild(answerContainer);

  preguntaActualizada();
  viewGame();
}

function randomAnswer(array) {
  let respuesta = [...array];

  let indiceActual = respuesta.length;
  let indicealeatorio;

  // While there remain elements to shuffle. -------borrqr luego
  while (indiceActual !== 0) {
    // Pick a remaining element.
    indicealeatorio = Math.floor(Math.random() * indiceActual);
    indiceActual--;

    // And swap it with the current element.
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
    crearB.addEventListener("click", keypressed);
    answerContainer.append(crearB);
  });
}
