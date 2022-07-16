import { registrarusuario } from "/Archive/ingresoUser.js";
import { actualizar } from "/View/viewQuiz.js";


export const viewLogin = (display) => {

  const buttonIniciar = document.createElement("button");
  const inputName = document.createElement("input");
  inputName.type = "text";
  inputName.placeholder = "Username";
  inputName.classList.add("input-username");
  const loginContainer = document.createElement("div");
  loginContainer.classList.add("login-contenedor");
  // contenedor principal
  const container = document.body;

  const formatoLogin = document.createElement("div");

  const contenedorForm = document.createElement("div");
  contenedorForm.classList.add("form-content");


  //Botton de agregar jugador

  buttonIniciar.classList.add("butto-iniciar");
  buttonIniciar.innerHTML = "INICIAR JUEGO";

  const divDescription = document.createElement("div");
  divDescription.classList.add("contarine-description");


  const description = document.createElement("p");
  description.classList.add("description");
  description.innerHTML ="¡Bienvenido al juego de preguntas! En este espacio pondremos a prueba tu conocimiento, tendrar que responder 5 preguntas, cada una de un nivel diferente ";

  divDescription.append(description);

  contenedorForm.append(divDescription, inputName, buttonIniciar);

  formatoLogin.append(divDescription,contenedorForm); // dentro del logincontainer

  loginContainer.append(formatoLogin);
  container.append(loginContainer);

  loginContainer.style.display = display;

  buttonIniciar.addEventListener("click", () => {
    console.log(inputName.value);
    registrarusuario(inputName.value);
    let gameContainer = document.querySelector(".game-container");
    loginContainer.style.display = "none";
    gameContainer.style.display = "block";
    actualizar();
   
    
    
  });
};


