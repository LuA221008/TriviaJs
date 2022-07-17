import { preguntas as listaPreguntas } from "../Archive/Pregunta.mjs";
import { Preguntas } from "../Class/ClassPreguntas.mjs";

/**
 * @LuisaAvila
 * @variable se genera la variable arrayPregunta que es la instancia de la clase array, esto permite creer un array con los elementos o información que se Pregunta.
 * @object se instancia la clase Pregunta permitiendo asignarle un valor de tipo Pregunta a cada uno de los elementos del array.
 */

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
