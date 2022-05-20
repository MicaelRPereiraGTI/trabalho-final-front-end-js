//CAPTURANDO ELEMENTOS
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const enviar = document.getElementById('enviar');
const btnCancelar = document.getElementById('cancelar');

//BOTÃO SALVAR



//BOTÃO CANCELAR

btnCancelar.addEventListener('click', (nav) => {
    nav.preventDefault();
    voltarIndex();
});

function voltarIndex (){
    window.location.href = "index.html";
}
