
 const container = document.querySelector("#container");
 const historialContainer = document.createElement("div");
 historialContainer.classList.add("historia-container");
 historialContainer.style.display = "block";

export const viewHistorial = (display) => {
    let data = localStorage.getItem("ingresoUser");
    let dataUser = JSON.parse(data);
    console.log(dataUser)
    
    /*dataUser.forEach(function (userData) {
      for (const usuario in userData) {
          console.log(userData[usuario]) 
       }
    });*/
  
  
  
 

  crearDivUser(dataUser)

  /*onst dataHostorial = document.createElement("p");
        dataHostorial.classList.add("data");
       // dataHostorial.textContent = usuario*/

  

  
  

  container.append(historialContainer);
};  

function crearDivUser(dataUser) {
  dataUser.forEach((element) => {
    for (const usuario in element) {
    let crearB = document.createElement("button");
    crearB.textContent = element[usuario];
    crearB.classList.add("newUsers");    
    historialContainer.append(crearB);
  }});
}

