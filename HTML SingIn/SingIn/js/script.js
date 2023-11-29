let btnVerSenha = document.querySelector('#verSenha')
let btnEntrar = document.querySelector('#entrar')

btnVerSenha.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')
    
    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
   } else {
        inputSenha.setAttribute('type', 'password')
    }
});

btnEntrar.addEventListener('click', () => {
    entrar()
})

function entrar() {
    let email = document.querySelector('#email');
    let emailLabel = document.querySelector('#labelEmail');
    let senha = document.querySelector('#senha');
    let senhaLabel = document.querySelector('#senhaLabel');
    let msgError = document.querySelector('#msgError');

    let listaEmail = JSON.parse(localStorage.getItem('listaEmail')) || [];

    let emailValid = {
        nome: '',
        email: '',
        senha: ''
    };

    listaEmail.forEach((item) => {
        if (email.value == item.emailCad && senha.value == item.senhaCad) {
            emailValid = {
                nome: item.nomeCad,
                email: item.emailCad,
                senha: item.senhaCad
            };
        }
    });

    if (email.value == emailValid.email && senha.value == emailValid.senha) {
        window.location.href = 'http://127.0.0.1:5501/Página/index.html'
    
        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substr(2)
   localStorage.setItem('token', token)
    } else {
        emailLabel.setAttribute('style', 'color: red')
        email.setAttribute('style', 'border-color: red')
        senhaLabel.setAttribute('style', 'color: red')
        email.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Email ou senha incorretos'
email.focus()
    }

}
