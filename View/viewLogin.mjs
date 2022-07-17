import { registrarusuario } from "../Archive/ingresoUser.mjs";
import { actualizar } from "../View/viewQuiz.mjs";
import { viewHistorial } from "../View/dataBase.mjs";

/**
 * @LuisaAvila
 * @method el método viewLogin que permite construir la ventana para que el usuario se registre y pueda comenzar el juego.
 * @param se ingresa el parametro display con el cual se puede controlar el cambio de ventanas.
 */

export const viewLogin = (display) => {
  const buttonIniciar = document.createElement("button");
  const inputName = document.createElement("input");

  inputName.type = "text";
  inputName.placeholder = "Ingresar Nombre de usuario";
  inputName.classList.add("input-username");

  const loginContainer = document.createElement("div");
  loginContainer.classList.add("login-contenedor");

  const container = document.body;
  const formatoLogin = document.createElement("div");
  const contenedorForm = document.createElement("div");

  contenedorForm.classList.add("form-content");
  buttonIniciar.classList.add("butto-iniciar");
  buttonIniciar.innerHTML = "INICIAR JUEGO";

  const divDescription = document.createElement("div");
  divDescription.classList.add("contarine-description");

  const description = document.createElement("p");
  description.classList.add("description");
  description.innerHTML =
    "¡Bienvenido a Preguntados! Aquí pondremos a prueba tus cocnocimientos, a medida que respondas de manera correcta acumularas puntos y subirás de nivel. ¡PONTE A PRUEBA!";
  loginContainer.style.display = display;

  const botonHistorial = document.createElement("button");
  botonHistorial.classList.add("buttonHistory");
  botonHistorial.innerHTML = "HISTORIAL";

  divDescription.append(description);
  contenedorForm.append(
    divDescription,
    inputName,
    buttonIniciar,
    botonHistorial
  );
  formatoLogin.append(divDescription, contenedorForm);
  loginContainer.append(formatoLogin);
  container.append(loginContainer);
  /**
   * @LuisaAvila
   * @method se agrega dinamismo a los botones a traves del evento click en donde se ejcutara diferentes funciones exportadas de dataUser y de viewGame
   * @param se incluye metodo actualizar para construir la ventana de viewGame
   */

  botonHistorial.addEventListener("click", () => {
    let historialContainer = document.querySelector(".historia-container");
    loginContainer.style.display = "none";
    historialContainer.style.display = "block";
    viewHistorial();
  });

  buttonIniciar.addEventListener("click", () => {
    console.log(inputName.value);
    registrarusuario(inputName.value);
    let gameContainer = document.querySelector(".game-container");
    loginContainer.style.display = "none";
    gameContainer.style.display = "block";
    actualizar();
  });
};
