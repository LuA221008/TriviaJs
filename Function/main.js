
import { viewLogin } from "/View/viewLogin.js";
import { userDatabase } from "../Archive/userDataBase.js";
import { viewGame } from "../View/viewQuiz.js";

userDatabase();

viewLogin("block");
