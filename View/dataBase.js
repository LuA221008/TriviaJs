
//import {userDataBase} from "/Archive/userDataBase.js";


export const viewHistorial=(display) =>{
    

    const container = document.querySelector("#container");
    const historialContainer = document.createElement("div");
    historialContainer.classList.add("historia-container");
    historialContainer.style.display= display;


    function crearusuario (prueba){
        prueba.forEach(element => {
            let newUser = document.createElement("div");
            newUser.textContent = element;
            newUser.classList.add("usuarios")
        });
    }







}