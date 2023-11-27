const user = "ADMIN"
const senha = "ADMIN"
let btnLogin = document.querySelector("#btn-login")

btnLogin.addEventListener("click", autenticar)

function redirecionarHome(){
    window.location = "../../fase 2 - bootstrap/index.html"
}

function autenticar(){
    let userInserted = document.querySelector("#usuario").value
    let senhaInserted = document.querySelector("#senha").value

    if (userInserted == user && senhaInserted == senha) {
        redirecionarHome()
    }else{
        alert("Usuário e/ou senha incorretos! Tente novamente!")
        location.reload()
    }    
}
