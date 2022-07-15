export const viewLogin = () => {
  // contenedor principal
  const container = document.querySelector("#container");
  const loginContainer = document.createElement("div");
  loginContainer.classList.add("login-contenedor");

  const formatoLogin = document.createElement("form");

  const contenedorForm = document.createElement("div");
  contenedorForm.classList.add("form-content");
  //laber para ingresar el nombre del usuario
  const labelName = document.createElement("label");
  labelName.classList.add("label-username");

  const inputName = document.createElement("input");
  inputName.type = "text";
  inputName.placeholder = "enter Username";
  inputName.classList.add("input-username");

  //Botton de agregar jugador
  const buttonIniciar = document.createElement("button");
  buttonIniciar.classList.add("butto-iniciar");
  buttonIniciar.innerHTML = "SEGUIR";
  // Botton de salir
  const buttonSalir = document.createElement("button");
  buttonSalir.classList.add("butto-salir");
  buttonSalir.innerHTML = "SALIR";

  contenedorForm.append(labelName, inputName, buttonSalir, buttonIniciar);

  formatoLogin.append(contenedorForm); // dentro del logincontainer

  loginContainer.append(formatoLogin);
  container.append(loginContainer);
};
