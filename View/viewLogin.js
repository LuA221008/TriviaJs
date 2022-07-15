import { registrarusuario } from "/Archive/ingresoUser.js";
import { viewGame } from "/View/viewQuiz.js";


export const viewLogin = (display) => {
  
  // contenedor principal
  const container = document.body;
  
  const inputName = document.createElement("input");
  inputName.type = "text";
  inputName.placeholder = "enter Username";
  inputName.classList.add("input-username");
  const loginContainer = document.createElement("div");
  loginContainer.classList.add("login-contenedor");
  

  const formatoLogin = document.createElement("div");

  const contenedorForm = document.createElement("div");
  contenedorForm.classList.add("form-content");
  //laber para ingresar el nombre del usuario
  const labelName = document.createElement("label");
  labelName.classList.add("label-username");

  //Botton de agregar jugador
  const buttonIniciar = document.createElement("button");
  buttonIniciar.classList.add("butto-iniciar");
  buttonIniciar.innerHTML = "SEGUIR";
  buttonIniciar.addEventListener("click", () => {
    console.log(inputName.value);
    registrarusuario(inputName.value);
    loginContainer.style.display = "none";
    viewGame();
    
  });

  // Botton de salir

  contenedorForm.append(labelName, inputName, buttonIniciar);

  formatoLogin.append(contenedorForm); // dentro del logincontainer

  loginContainer.append(formatoLogin);
  container.append(loginContainer);

  loginContainer.style.display = display;
};


