export const userDatabase = () => {
  if (localStorage.length == 0) {
    const user = [{ userName: "ganador", score: "50" }];

    localStorage.setItem("ingresoUser", JSON.stringify(user));
  }
};
