//import {juego1} from "/Function/main.js";
import { Game } from "/Class/ClassGame.js";
import { arrayPregunta } from "/Archive/ObjetoPreguntas.js";

const juego1 = new Game(arrayPregunta);
let pregunta = juego1.getRandomPregunta();

let { question, correct, option1, option2, option3 } = pregunta;
console.log(correct)

export const viewGame = () => {
  const container = document.querySelector("#container");

  const GameContainer = document.createElement("div");
  GameContainer.classList.add("game-container");

  /// dentro del game contaier ira

  //division para titulo donde ira una p

  const titleContainer = document.createElement("div"); //-----este se agrega a game container
  titleContainer.classList.add("title-container");

  const title = document.createElement("h1");
  title.classList.add("titulos");
  title.innerHTML = "PREGUNTADOS";

  // TITULO DENTRO DEL CONTENEDOR
  titleContainer.append(title);
  //división para las respuestas

  ///  pregunta

  const questionContainer = document.createElement("div"); //--contenedor pregunta
  questionContainer.classList.add("question-container");

  const questionOne = document.createElement("p");
  questionOne.classList.add("questions");
  questionOne.innerText = `prueba preguna ${question}`;

  questionContainer.append(questionOne);

  //pregunta uno boton y texto

  const answerContainer = document.createElement("div");
  answerContainer.classList.add("answer-container");

  const buttonAnswerOne = document.createElement("button");
  buttonAnswerOne.classList.add("buttons");
  buttonAnswerOne.id = "respuesta-uno";
  buttonAnswerOne.innerHTML = `A ${correct}`;
  buttonAnswerOne.addEventListener("click", keypressed);

  const buttonAnswertwo = document.createElement("button");
  buttonAnswertwo.classList.add("buttons");
  buttonAnswertwo.id = "respuesta-dos";
  buttonAnswertwo.innerHTML = `B  ${option1}`;
  buttonAnswertwo.addEventListener("click", keypressed);

  const buttonAnswerThree = document.createElement("button");
  buttonAnswerThree.classList.add("buttons");
  buttonAnswerThree.id = "respuesta-tres";
  buttonAnswerThree.innerHTML = `C ${option2}`;
  buttonAnswerThree.addEventListener("click", keypressed);

  const buttonAnswerFour = document.createElement("button");
  buttonAnswerFour.classList.add("buttons");
  buttonAnswerFour.id = "respuesta-cuatro";
  buttonAnswerFour.innerHTML = `D ${option3}}`;
  buttonAnswerFour.addEventListener("click", keypressed);

  answerContainer.append(
    buttonAnswerOne,
    buttonAnswertwo,
    buttonAnswerThree,
    buttonAnswerFour
  );

  GameContainer.append(titleContainer, questionContainer, answerContainer);
  container.append(GameContainer);
};

const keypressed = (event) => {
  const buttonPressed = event.target.innerHTML;  
  validarAnswer(buttonPressed);  
};

function validarAnswer(buttonPressed) {
    const validation = buttonPressed === correct; 
    return validation; 

}

