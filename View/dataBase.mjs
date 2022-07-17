import { viewLogin } from "/View/viewLogin.mjs";

/**
 * @LuisaAvila
 * @see Se construye la venta en la cual se puede observar el histrial de los usuarios, visualizando el puntaje y el nombre del usuario.
 */

const container = document.querySelector("#container");

const historialContainer = document.createElement("div");
historialContainer.classList.add("historia-container");
historialContainer.style.display = "none";

const buttonConatiner = document.createElement("div");
buttonConatiner.classList.add("buttonconiainer");

const buttonExit = document.createElement("button");
buttonExit.classList.add("BotonsalirHistorial");
buttonExit.addEventListener("click", () => {
  historialContainer.style.display = "none";
  viewLogin("block");
});

buttonExit.innerHTML = "SALIR";
buttonConatiner.append(buttonExit);
historialContainer.append(buttonConatiner);

container.append(historialContainer);

/**
 * @LuisaAvila
 * @method la función view historia obtiene la data que proviene del localStorage y con esa infromación contruir la ventana a través de metodo crearDicUser.
 * @see se incluye el método creraDivUser donde se le ingresa la infromación del localStorage.
 */

export const viewHistorial = () => {
  let data = localStorage.getItem("ingresoUser");
  let dataUser = JSON.parse(data);
  console.log(dataUser);

  crearDivUser(dataUser);
};
/**
 * @LuisaAvila
 * @method el cerarDivUser permite crear las diferente diviciones en las cuales se encontará la información en la ventana a crear, así el usuario podrá consultar su puntaje.
 * @param se ingresa el parametro dataUser que hace referencia a la información que proviene del localStorage.
 */
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
