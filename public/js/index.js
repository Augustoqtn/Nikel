const myModal = new bootstrap.Modal("#register-modal");

// logar no sistema:
document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email-input").value;
    const passoword = document.getElementById("password-input").value;
    const session = document.getElementById("session-input").checked;

    const account = getAccont(email);

    if (!account) {
        alert("Opps! verifique o usuário ou a senha!");
        return;
    }

    window.location.href = "home.html";

});


// criar conta:
document.getElementById("create-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("email-create-input").value;
    const password = document.getElementById("password-create-input").value;

    if (email.length < 5) {
        alert("Verifique seu E-mail, ele deve ter no minimo cinco carácters");
        return;
    }
    if (password.length < 5) {
        alert("Verifique sua senha, ela deve ter no minimo 4 digitos");
        return;
    }
    saveAccount({
        login: email,
        password: password,
        transactions: []

    });

    myModal.hide();

    alert("conta criada com sucesso!");

});

function saveAccount(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
}

function getAccont(key) {
    const accont = localStorage.getItem(key);
    if (accont) {
        return JSON.parse(accont);
    }
    return "";
}