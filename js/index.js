 //Pego os dados de usuários que tenho no meu localstorage
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
 }