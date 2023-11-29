if(localStorage.getItem('token') == null){
    alert('Você precisa estar logado para acessar essa página')
}

function sair(){
    localStorage.removeItem('token')
    window.location.href = 'http://127.0.0.1:5501/SingIn/SingInindex.html'
}