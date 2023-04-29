function checkInput () {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "" && password === "") {
        alert("Você não digitou nenhuma informação. Digite o seu email e a senha para poder continuar.")
    }
    else if (email === "") {
        alert("Digite um email válido.")
    }
    else if (password === "") {
        alert("Digite uma senha válida.")
    }
    else {
        alert(`Entraremos em contato através do endereço ${email}.`)
        cleanInputs()
    }
}

function cleanInputs() {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
}

function scrollToForm() {
    window.location.href = "#section-form";
}
  
