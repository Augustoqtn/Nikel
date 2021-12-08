const myModal = new bootstrap.Modal("#register-modal");


// criar conta:
document.getElementById("create-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("email-create-input").value;
    const passoword = document.getElementById("passoword-create-input").value;

    if (email.length < 5) {
        alert("Verifique seu E-mail, ele deve ter no minimo cinco carácters");
        return;
    }
    if (passoword.length < 5) {
        alert("Verifique sua senha, ela deve ter no minimo 4 digitos");
        return;
    }
    saveAccount({
        login: email,
        passoword: passoword,
        transactions: []

    });

    myModal.hide();

    alert("conta criada com sucesso!");

});

function saveAccount(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
}