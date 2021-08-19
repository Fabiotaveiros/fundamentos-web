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
   }
}