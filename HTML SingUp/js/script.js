
let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSucess = document.querySelector('#msgSucess')

nome.addEventListener('keyup', ()=> {
    if(nome.value.length <= 2){
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = '<strong>Nome *Insira no mínimo 3 caracteres</strong>'
        nome.setAttribute('style', 'border-color: red')
        validNome = false

    } else {
labelNome.setAttribute('style', 'color: green')
labelNome.innerHTML = 'Nome'
nome.setAttribute('style', 'border-color: green')
validNome = true
    }
})

email.addEventListener('keyup', () => {
    if(email.value.length <= 4){
        labelEmail.setAttribute('style', 'color: red')
        labelEmail.innerHTML = '<strong>Email *Insira no mínimo 5 caracteres</strong>'
        email.setAttribute('style', 'border-color: red')
        validEmail = false
    } else {
        labelEmail.setAttribute('style', 'color:green')
        labelEmail.innerHTML = 'Email'
        email.setAttribute('style', 'border-color: green')
        validEmail = true
    }
})

senha.addEventListener('keyup', () => {
    if(senha.value.length <= 7){
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = '<strong>Senha *Insira no mínimo 8 caracteres</strong>'
        senha.setAttribute('style', 'border-color: red')
        validSenha = false
    } else {
        labelSenha.setAttribute('style', 'color:green')
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color: green')
        validSenha = true
    }
})

confirmSenha.addEventListener('keyup', () => {
    if(senha.value != confirmSenha.value){
        labelConfirmSenha.setAttribute('style', 'color: red')
        labelConfirmSenha.innerHTML = '<strong>Confirmar a senha *As senhas não conferem</strong>'
        confirmSenha.setAttribute('style', 'border-color: red')
        validConfirmSenha = false
    } else {
        labelConfirmSenha.setAttribute('style', 'color:green')
        labelConfirmSenha.innerHTML = 'Confere'
        confirmSenha.setAttribute('style', 'border-color: green')
        validConfirmSenha = true
    }
})

function cadastrar(){
    if(validNome && validEmail && validSenha && validConfirmSenha){
let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

listaUser.push(
    {
        nomeCad: nome.value,
        userCad: email.value,
        senhaCad: senha.value
    }
)

localStorage.setItem('listaUser', JSON.stringify(listaUser))


        msgSucess.setAttribute('style', 'display: block')
        msgSucess.innerHTML = '<strong>Cadastrando usuário...</strong>'
        msgError.innerHTML = ''
        msgError.setAttribute('style', 'display: none')

        setTimeout(()=>{
            window.location.href ='http://127.0.0.1:5501/SingInindex.html'
        }, 3000)
       
    } else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
        msgSucess.innerHTML = ''
        msgSucess.setAttribute('style', 'display: none')
    }
}

btn.addEventListener('click', ()=> {
    let inputSenha = document.querySelector('#senha')
    
    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
   } else {
        inputSenha.setAttribute('type', 'password')
    }
})

btnConfirm.addEventListener('click', ()=> {
    let inputConfirmSenha = document.querySelector('#confirmSenha')
    
    if(inputConfirmSenha.getAttribute('type') == 'password'){
        inputConfirmSenha.setAttribute('type', 'text')
   } else {
        inputConfirmSenha.setAttribute('type', 'password')
    }
})


