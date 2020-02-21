const login = "admin";
const password = "qwerty123";

export function showLogInContainer(){
    document.getElementById("deezerApiContainer").classList.toggle("hide");
    document.getElementById("logInContainer").classList.toggle("hide");
    document.getElementById("logInBtn").addEventListener("click", logIn);
}

function logIn(){
    if(login == document.getElementById("loginField").value && 
    password == document.getElementById("passField").value){
        showOpenFileContainer();
    }
    else{
        alert("Неправильный логин или пароль");
    }
}

function showOpenFileContainer(){
    document.getElementById("openFileContainer").classList.toggle("hide");
    document.getElementById("logInContainer").classList.toggle("hide");
}