//CAPTURANDO ELEMENTOS
const btnCancelar = document.getElementById('btn-cancelar');
const btnCadastrar = document.getElementById('btn-cadastrar');
const cardLogin = document.getElementById('login-index');
const cardCadastro = document.getElementById('login-cadastro');
const focus = document.querySelectorAll('input');

//CRIANDO E SALVANDO USUÁRIO
document.querySelector('#btn-salvar').addEventListener('click', (e) => {
    e.preventDefault();

    let email = document.querySelector('#email-cadastrar').value;
    let senha = document.querySelector('#senha-cadastrar').value;
    let confirmaSenha = document.querySelector('#input-confirma-senha').value;

    if (email.length > 5 && validaEmail(email) == true){
        if(senha === confirmaSenha){
            salvar(email, senha);
            alert("Cadastro realizado com sucesso!");
        }else{
            alert("As senhas digitadas devem ser iguais!")
        }
    }else{
        alert("O E-mail digitado é inválido! \nExemplo: texto@texto.com" )
    }
    
});

//VALIDANDO E-MAIL
function validaEmail (validaE){
    let re = /\S+@\S+\.\S+/;
    return re.test(validaE);
}

function salvar(e, s){
    let db = JSON.parse(localStorage.getItem('usuarios') || '[]');
  
    let usuario = {
        id: db.length + 1,
        login: e,
        senha: s
    }

    if(usuario )

    db.push(usuario);
    
    localStorage.setItem('usuarios', JSON.stringify(db));
    location.href = 'index.html';    
};



//BOTÃO CADASTRAR
btnCadastrar.addEventListener("click", modificaCardParaCadastrar);

function modificaCardParaCadastrar() {
    cardLogin.setAttribute("style", "display: none");
    cardCadastro.setAttribute("style", "display: flex");
}

//BOTÃO CANCELAR
btnCancelar.addEventListener("click", modificaCardParaLogin);

function modificaCardParaLogin() {
    cardLogin.setAttribute("style", "display: flex");
    cardCadastro.setAttribute("style", "display: none");
}

//EVENTO DE FOCO NOS CAMPOS LOGIN E SENHA
focus.forEach((value) => {
    value.addEventListener('focus', () => {
        value.style.borderColor = "#00ff88";
    });
    value.addEventListener('blur', () => {
        value.style.borderColor = "transparent";
    })
})


//LOGANDO NO SISTEMA
document.querySelector('#btn-logar').addEventListener('click', (e)=>{
    e.preventDefault();
    entrar()
});

function entrar(){
    let email = document.querySelector('#email-login').value;
    let senha = document.querySelector('#senha-login').value;

    /* let listaUser = '[]'; */

    let usuarioValido = {
        login: "",
        senha: ""
    }

    listaUser = JSON.parse(localStorage.getItem('usuarios') || '[]');

    listaUser.forEach(item => {
        if(email === item.login && senha === item.senha){
            usuarioValido = {
                id: item.id,
                login: item.login,
                senha: item.senha
            }
        }
    });

    if(email === usuarioValido.login && senha === usuarioValido.senha){
        alert('Bem-vindo so sitema Notes!')
        saveSession(usuarioValido.id);
        window.location.href ='recados.html';
    }else{
        alert('Algo deu errado, verifique o e-mail e a senha digitado \nOu clique em Criar conta!')
    }
};

function saveSession(data){
    if(saveSession){
        localStorage.setItem("session", data);
    }

    sessionStorage.setItem("logado", JSON.stringify(data));

};