import { Preguntas } from "./ClassPreguntas.js";

export class Game {
  constructor(preguntasGame) {
    this.preguntasGame = preguntasGame;
    this.preguntaIndex = 0;
    this.puntaje = 0;
    this.level = 1;
    this.juegoTerminado = false;
  }
  // set y get de PreguntasGame
  setPreguntasGame(arrayPregunta) {
    this.preguntasGame = arrayPregunta;
  }

  getPreguntasGame() {
    return this.preguntasGame;
  }
  // set y get de IndexPregunta
  setIndexPregunta(index) {
    this.preguntaIndex = index;
  }

  getIndexPregunta() {
    return this.preguntaIndex;
  }

  getPreguntasGame() {
    return this.preguntaIndex;
  }
  // set y get de Puntaje
  setPuntaje(puntaje) {
    this.puntaje = puntaje;
  }

  getPuntaje() {
    return this.puntaje;
  }
 

  setLevel(level) {
    this.level = level;
  }

  getLevel() {
    return this.level;
  }
  
  getIndexPregunta() {
    return this.preguntasGame[this.preguntaIndex];
  }
  getJuegoTerminado() {
    return this.getLevel() === 5 && this.getPuntaje() == 50;
  }

  //METODOS
  //metodo para las preguntas aleatoreas

  getRandomPregunta(level) {
    let ressult = this.preguntasGame.filter(function (preguntita) {
      return preguntita.level == level;

      /// recordar cambiar esto a this.level
    });
    let random = Math.floor(Math.random() * (ressult.length - 1));
    let randomQuestion = ressult[random];   

    return { ...randomQuestion };
  }
  //metodo para aumentar el puntaje y el nivel
}
