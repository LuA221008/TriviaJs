
import { userDatabase } from "/Archive/ingresoUser.js";
import { viewLogin } from "/View/viewLogin.js";
import{viewHistorial} from "/View/dataBase.js"
import { actualizar, viewGame } from "../View/viewQuiz.js";

userDatabase();
viewLogin("block");
// // let gameContainer = document.querySelector(".game-container");
// //    // loginContainer.style.display = "none";
// //     gameContainer.style.display = "block";
// //     actualizar();

// let historialContainer = document.querySelector(".historia-container");
// historialContainer.style.display = "block";
// viewHistorial();
