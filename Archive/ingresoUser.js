export const userDatabase = () => {
    if (localStorage.length == 0) {
      const user = [{ userName: "ganador", score: "50" }];
  
      localStorage.setItem("ingresoUser", JSON.stringify(user));
    }
  };


export function registrarusuario(nameUser) {
  sessionStorage.setItem("user", nameUser);
}

export function saveUser(score) {
  let name = sessionStorage.getItem("user");
  let user = { username: name, score: score };

  let dataBase = JSON.parse(localStorage.getItem("ingresoUser"));
  dataBase.push(user)
  localStorage.setItem("ingresoUser",JSON.stringify(dataBase));
  console.log(dataBase)
}



