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
/**
 * @LuisaAvila
 * @function En este método se construyela vista para visalizar las preguntas y respuestas del juego, también incluye el puntaje y el nivel obtenido por el usuario.
 * @see se incluye el método crear botones para agregar las respuestas a la ventana el juego.
 */
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
/**
 * @LuisaAvila
 * @method el método keypressed tiene la función de obtener la infromación del botón que fue oprimido
 * @param se ingresa el parametro event que hace referencia al evento de click de los botones.
 * @see se incluye el método validar respuesta donde el resultado del método keypressed ingresa como parametro y realizar la validación de la respuesta obtenida por el usuario.
 */
const keypressed = (event) => {
  const buttonPressed = event.target.innerHTML;
  validarAnswer(buttonPressed);
};

/**
 * @LuisaAvila
 * @method el método permite validarAnswer la respuesta del usuario y con esto se determina si el usuario respondió bien, de ser asi el nivel y el puntaje del usuario aumenta, si responde bien se actualiza la pregunta hasta que gane o pierda.
 * @param se ingresa el parametro buttonPressed que hace referencia al contenido del botón que ha presionado el usuario.
 * @see se incluye el método actualizar que permite actualizar la pregunta cuando el usuario responde bie, también incluye el método saveUser en el se guarda  la variable del puntaje para ingresarlo al LocalStorage.
 */

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

/**
 * @LuisaAvila
 * @method el método preguntaActualizada en este metodo se instancia la clase classGame para acceder al método getRandomPregunta con el fin de obtener el array de la pregunta que se va a mostrar con esto se realiza una desestructuración del array y cada elemento se gauar en una variable.
 * @see se incluye el método getRandomPregunta al cual le ingresa el parametro level que indica el nivel en el cual esta el usuario y asi poder tomar una pregunta de ese nivel, para ello se instancia la clase classGame.
 *
 */
function preguntaActualizada() {
  let nuevaPregunta = juego1.getRandomPregunta(level);
  question = nuevaPregunta.question;
  correct = nuevaPregunta.correct;
  option1 = nuevaPregunta.option1;
  option2 = nuevaPregunta.option2;
  option3 = nuevaPregunta.option3;
}

/**
 * @LuisaAvila
 * @method el método actualizar permite eliminar el contenido que hay en las etiquetas que construyen la ventana y se llama al método preguntaActualizada para que ingrese las nuevas preguntas y al metodo viewGame para que construya la ventana.
 * @see se incluye el método preguntaActualizada con el fin de que ingrese o actualice la pregunta y las respuesta y viewGame se encarga de construir la ventana de preguntas con la nueva pregunta.
 */
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

preguntaActualizada();

/**
 * @LuisaAvila
 * @method el método radomAnswer se encarga de poner las respuestas de manera aleatorea cambiando la posición dentro del array.
 * @param se ingresa el parametro array que hace referencia al array de respuestas .
 * @return retorna un array de respuestas con diferentes posiciones.
 */
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
/**
 * @LuisaAvila
 * @method el método crearBotones se encarga de crera las etiquetas de botones para cada una de las respuestas, tambien asigna una respuesta a cada botón, con ayuda del método randomAnswer.
 * @param se ingresa el parametro answer que hace referencia al array de respuestas y el answerContainer que hace referencia a la divición donde se posicionarán los botones en la ventana.
 */

function crearBotones(answers, answerContainer) {
  randomAnswer(answers).forEach((element) => {
    let crearB = document.createElement("button");
    crearB.textContent = element;
    crearB.classList.add("buttons");
    crearB.addEventListener("click", keypressed);
    answerContainer.append(crearB);
  });
}
/**
 * @LuisaAvila
 * @method el método puntajeactual permite obtener el puntaje que obtuvo la persona segun el nivel en el que este, esto con el fin de poder guardarlo en el localStorage.
 * @param se ingresa el parametro score que es el puntaje que ha obtenido el usuario.
 * @see se usa el método saveUser para guardar el puntaje del usuario e ingresarlo al localStorage.
 */
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
