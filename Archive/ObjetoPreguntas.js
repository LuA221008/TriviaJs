import { preguntas as listaPreguntas } from "./Pregunta.js";
import { Preguntas } from "../Class/ClassPreguntas.js";

let arrayPregunta = new Array();

listaPreguntas.forEach(function (element) {
  arrayPregunta.push(
    new Preguntas(
      element.level,
      element.question,
      element.correct,
      element.option1,
      element.option2,
      element.option3
    )
  );
});

export default arrayPregunta;
