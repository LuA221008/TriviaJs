/**
 * @LuisaAvila
 * @method el método vuserDataBase permite inicializar el localStorage para ingregar la información del usuario.
 */

export const userDatabase = () => {
  if (localStorage.length == 0) {
    const user = [{ userName: "ganador", score: "50" }];

    localStorage.setItem("ingresoUser", JSON.stringify(user));
  }
};

/**
 * @LuisaAvila
 * @method el método resgistarusuario permite ingresar el nombre del usuario y guardarlo en el localStorage.
 * @param recibe un pararmetro nameUser que hace referencia al nombre que ingresa el usuario al iniciar el juego.
 */
export function registrarusuario(nameUser) {
  sessionStorage.setItem("user", nameUser);
}
/**
 * @LuisaAvila
 * @method el método saveUser permite tomar el valor del nombre del usuario y guardarlo con el puntaje obtenid y genera un objeto con estosdatos.
 * @param se ingresa el parametro score que hace referencia al puntaje del usuario
 */
export function saveUser(score) {
  let name = sessionStorage.getItem("user");
  let user = { username: name, score: score };

  let dataBase = JSON.parse(localStorage.getItem("ingresoUser"));
  dataBase.push(user);
  localStorage.setItem("ingresoUser", JSON.stringify(dataBase));
  console.log(dataBase);
}
