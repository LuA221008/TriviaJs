import { viewLogin } from "/View/viewLogin.js";

const container = document.querySelector("#container");


const historialContainer = document.createElement("div");
historialContainer.classList.add("historia-container");
historialContainer.style.display = "none";

const buttonConatiner = document.createElement("div");
buttonConatiner.classList.add("buttonconiainer");

const buttonExit = document.createElement("button");
buttonExit.classList.add("BotonsalirHistorial");
buttonExit.addEventListener("click",()=>{
  historialContainer.style.display = "none";
  viewLogin("block")})
buttonExit.innerHTML= "SALIR";
buttonConatiner.append(buttonExit);
historialContainer.append(buttonConatiner);

container.append(historialContainer);

export const viewHistorial = () => {
  let data = localStorage.getItem("ingresoUser");
  let dataUser = JSON.parse(data);
  console.log(dataUser);

  crearDivUser(dataUser);

  
};

export function crearDivUser(dataUser) {
  dataUser.forEach((element) => {
    for (const usuario in element) {
      let crearB = document.createElement("button");
      crearB.textContent = element[usuario];
      crearB.classList.add("newUsers");
      historialContainer.append(crearB);
      
    }
  });
}
