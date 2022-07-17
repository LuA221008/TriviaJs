/**
 * @LuisaAvila
 * @Clas se crea la clase Game que es el modelo para el jugador, donde tendrá una pregunta, un puntaje, un nivel y se determina la terminación del juego.
 * @see
 */
export class Game {
  constructor(preguntasGame) {
    this.preguntasGame = preguntasGame;
    this.puntaje = 0;
    this.level = 1;
    this.juegoTerminado = false;
  }

  /**
   * @LuisaAvila
   * @method se generan los método set y get para acceder al las variables de la clase.
   */

  setPreguntasGame(arrayPregunta) {
    this.preguntasGame = arrayPregunta;
  }

  getPreguntasGame() {
    return this.preguntasGame;
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

  getJuegoTerminado() {
    return this.getLevel() === 5 && this.getPuntaje() == 50;
  }
  /**
   * @LuisaAvila
   * @method el método viewLogin que permite construir la ventana para que el usuario se registre y pueda comenzar el juego.
   * @param se ingresa el parametro level el cual irá variando confrome el usuario aumente el nivel y asi poder filtrar la preguntas segun el nivel en el que está.
   */

  getRandomPregunta(level) {
    let ressult = this.preguntasGame.filter(function (preguntita) {
      return preguntita.level == level;
    });
    let random = Math.floor(Math.random() * (ressult.length - 1));
    let randomQuestion = ressult[random];

    return { ...randomQuestion };
  }
}
