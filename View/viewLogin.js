import { registrarusuario } from "/Archive/ingresoUser.js";
import { actualizar } from "/View/viewQuiz.js";


export const viewLogin = (display) => {

  const buttonIniciar = document.createElement("button");
const inputName = document.createElement("input");
inputName.type = "text";
inputName.placeholder = "enter Username";
inputName.classList.add("input-username");
const loginContainer = document.createElement("div");
loginContainer.classList.add("login-contenedor");
  // contenedor principal
  const container = document.body;

  const formatoLogin = document.createElement("div");

  const contenedorForm = document.createElement("div");
  contenedorForm.classList.add("form-content");
  //laber para ingresar el nombre del usuario
  const labelName = document.createElement("label");
  labelName.classList.add("label-username");

  //Botton de agregar jugador

  buttonIniciar.classList.add("butto-iniciar");
  buttonIniciar.innerHTML = "INICIAR JUEGO";

  // Botton de salir

  contenedorForm.append(labelName, inputName, buttonIniciar);

  formatoLogin.append(contenedorForm); // dentro del logincontainer

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


