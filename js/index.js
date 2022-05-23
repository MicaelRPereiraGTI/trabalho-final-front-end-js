//CAPTURANDO ELEMENTOS
const enviar = document.getElementById('enviar');
const btnCancelar = document.getElementById('btn-cancelar');
const btnCadastrar = document.getElementById('btn-cadastrar');
const cardLogin = document.getElementById('login-index');
const cardCadastro = document.getElementById('login-cadastro');

//SALVANDO NO LOCALSTORAGE


//BOTÃO CADASTRAR
btnCadastrar.addEventListener("click", modificaCardCadastrar);

function modificaCardCadastrar() {
    cardLogin.setAttribute("style", "display: none");
    cardCadastro.setAttribute("style", "display: flex");
}

//BOTÃO CANCELAR
btnCancelar.addEventListener("click", modificaCardParaLogin);

function modificaCardParaLogin() {
    cardLogin.setAttribute("style", "display: flex");
    cardCadastro.setAttribute("style", "display: none");
}

//LOGANDO NO SISTEMA
const email = document.getElementById('email');
const senha = document.getElementById('senha');



document.querySelector('#btn-login').addEventListener('click', (e)=>{
    e.preventDefault();

    logar();
});

function logar(){

};

let usuarios = [];

let user = {
    email: '',
    senha: ''
};

usuarios = JSON.parse(localStorage.getItem('db_login'));

usuarios.forEach(elemento=>{
    if(elemento.email === login.value && elemento.senha === senha.value){
        usuario = {
            email: elemento.email,
            senha: elemento.senha
        }
    }
});

/* btnCancelar.addEventListener('click', (nav) => {
    nav.preventDefault();
    voltarIndex();
});

function voltarIndex (){
    window.location.href = "index.html";
}


 */









/*  //Pego os dados de usuários que tenho no meu localstorage
 let usuarios = JSON.parse(localStorage.getItem('db_client'));

 //crio um objeto pra comparar com os dados do objeto que vem do localstorage
 let usuario = {
     email: '',
     senha: ''
 }
usuarios.forEach(elemento=>{
     if(elemento.email === login.value && elemento.senha === senha.value){
         usuario = {
             email: elemento.email,
             senha: elemento.senha
         }
     }
 });
if(usuario.email === login.value && usuario.senha === senha.value){
     sessionStorage.setItem('logado', usuario.email)
     window.location.href = 'home.html';
 } */
