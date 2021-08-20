/* 
Case sensitive = reconhece letras maísculas e minusculas

Por tag: getElementByTagName()
Por id: getElementById()
Por nome: getElementsByName()
Por classe: getElementsByClass()
Por seletor: querySelector()
*/

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")
nome.style.width = "100%"
email.style.width = "100%"

function validaNome(){
    let txtNome = document.querySelector("#txtnome")
    if(nome.value.length < 3){
        txtNome.innerHTML = "Nome inválido"
        txtNome.style.color = "#D8BFD8"
    } else {
        txtNome.innerHTML = "Nome válido"
        txtNome.style.color = "#66CDAA"
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")

   if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "Email inválido"
        txtEmail.style.color = "#D8BFD8"
   } else {
       txtEmail.innerHTML = "E-mail válido"
       txtEmail.style.color = "#66CDAA"
       emailOk = true
   }
}
function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")

    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = "Texto muito grande, escreva no máximo 100 caracteres"
        txtAssunto.style.color = "#D8BFD8"
        txtAssunto.style.display = "block"
    } else {
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}
function enviar(){
    if (nomeOk == true && assuntoOk == true && emailOk == true) {
        alert ("Formulário enviado com sucesso!!")
    } else {
    alert ("Preencha o formulário corretamente antes de enviar...")
    }
}

function mapaZoom(){
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

function mapaNormal(){
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}