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

    if (senha === confirmaSenha){
        salvar(email, senha);
        alert("Cadastro realizado com sucesso!")
    }else{
        alert("As senhas digitadas devem ser iguais!")
    }
    
});

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
    let email = document.querySelector('#email-login');
    let senha = document.querySelector('#senha-login');

    let listaUser = [];

    let usuarioValido = {
        email: "",
        senha: ""
    }

    listaUser = JSON.parse(localStorage.getItem('usuarios'));

    //vai varrer todos os itens
    listaUser.forEach(item=>{
        if(email.value === item.email && senha.value === item.senha){
            usuarioValido = {
                id: item.id,
                login: item.email,
                senha: item.senha
            }
        }
    });

    if(email.value === usuarioValido.login && senha.value === usuarioValido.senha){
        alert('Bem-vindo so sitema Notes!')
        saveSession(usuarioValido.id);
        window.location.href ='recados.html';
    }else{
        alert('Algo deu errado, verifique o e-mail e senha digitado!')
    }
}
;

function saveSession(data){
    if(saveSession){
        localStorage.setItem("session", data);
    }

    sessionStorage.setItem("logado", JSON.stringify(data));

};