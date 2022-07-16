import { registrarusuario } from "/Archive/ingresoUser.js";
import { actualizar } from "/View/viewQuiz.js";
import {viewHistorial} from "/View/dataBase.js"


export const viewLogin = (display) => {

  const buttonIniciar = document.createElement("button");
  const inputName = document.createElement("input");
  inputName.type = "text";
  inputName.placeholder = "Ingresar Nombre de usuario";
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
  description.innerHTML ="¡Bienvenido a Preguntados! Aquí pondremos a prueba tus cocnocimientos, a medida que respondas de manera correcta acumularas puntos y subirás de nivel. ¡PONTE A PRUEBA!";
  loginContainer.style.display = display;
  const botonHistorial = document.createElement("button");
  botonHistorial.classList.add("buttonHistory");
  botonHistorial.innerHTML ="HISTORIAL"

  divDescription.append(description);

  contenedorForm.append(divDescription, inputName, buttonIniciar,botonHistorial);

  formatoLogin.append(divDescription,contenedorForm); // dentro del logincontainer

  loginContainer.append(formatoLogin);
  container.append(loginContainer);


  botonHistorial.addEventListener("click",()=>{
    let historialContainer = document.querySelector(".historia-container");
    loginContainer.style.display=("none");
    historialContainer.style.display = "block";
    viewHistorial();
  })  


  buttonIniciar.addEventListener("click", () => {
    console.log(inputName.value);
    registrarusuario(inputName.value);
    let gameContainer = document.querySelector(".game-container");
    loginContainer.style.display = "none";
    gameContainer.style.display = "block";
    actualizar();
   
    
    
  });
};


