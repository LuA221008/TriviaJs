import { preguntas as listaPreguntas } from "/Archive/Pregunta.js";
import { Preguntas } from "/Class/ClassPreguntas.js";

export let arrayPregunta = new Array();

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
