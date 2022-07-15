export class Preguntas {
  constructor(level, question, correct, option1, option2, option3) {
    this.level = level;
    this.question = question;
    this.correct = correct;
    this.option1 = option1;
    this.option2 = option2;
    this.option3 = option3;
  }

  respuestaCorrecta = (respuestaUsuario) => {
    return respuestaUsuario === this.correct;
  };
}