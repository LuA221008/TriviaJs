
export const viewHistorial = (display) => {
    let data = localStorage.getItem("ingresoUser");
    let dataUser = JSON.parse(data);
    //console.log(dataUser)
    
    dataUser.forEach(function (userData) {
      for (const usuario in userData) {
          console.log(userData[usuario]) 
       }
    });
  
  
  
  const container = document.querySelector("#container");
  const historialContainer = document.createElement("div");
  historialContainer.classList.add("historia-container");
  historialContainer.style.display = display;

  const dataHostorial = document.createElement("p");
        dataHostorial.classList.add("data");
       // dataHostorial.textContent = usuario

  

  //historialContainer.append(dataHostorial)
  

  container.append(historialContainer);
};  

