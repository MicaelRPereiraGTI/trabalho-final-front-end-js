const form = document.querySelector('#form-recados');
const tabela = document.querySelector('#tbody');
let idx = form.idx.value;
//SALVANDO NO LOCALSTORAGE

const atualizarLocalStorage = (recados) => {localStorage.setItem('recados', JSON.stringify(recados))};

//RECUPERA DADOS DO LOCALSTORAGE
const recuperarLocalStorage = () => JSON.parse(localStorage.getItem('recados') || '[]');

const salvarRecado = (e) => {
    e.preventDefault();
    
    //capturando os dados do formulário
    const descricao = form.descricao.value;
    const detalhamento = form.detalhamento.value;

    if(idx == 'novo'){
        const recados = recuperarLocalStorage();
        recados.push({id:recados.length + 1, descricao, detalhamento});
        atualizarLocalStorage(recados);
        preencheTabela();
        form.reset();
    }else{
        let recado = {id: idx, descricao, detalhamento}
        atualizarRecado(idx, recado);
        preencheTabela();
        form.reset();
        idx = 'novo';
    }
   

};

const preencheTabela = () => {
    const recados = recuperarLocalStorage();
    tabela.innerHTML = '';
    for(recado of recados){
        tabela.innerHTML += `

            <tr>
                <th scope="row">${recado.id}</th>
                <td>${recado.descricao}</td>
                <td>${recado.detalhamento}</td>
                <td>
                    <img type="button" width="40" src="./img/delet.svg" onclick="removerRecado(${recado.id})">
                    <img type="button" width="40" src="./img/editar.png" onclick="editarRecado(${recado.id})">
                </td>
            </tr>

        `;
    }
}

//REMOVENDO RECADOS
const removerRecado = (id) => {
    const recados = recuperarLocalStorage();
    const indexRecado = recados.findIndex((recado) => recado.id === id)
    if(indexRecado < 0) return;
    /* recados.splice(indexRecado, 1); */
    recados.splice(indexRecado -1, 1);
    atualizarLocalStorage(recados);
    alert("Produto removido com sucesso!")
    preencheTabela();
}

//EDITANDO RECADOS
const editarRecado = (id) => {
    const recados = recuperarLocalStorage();
    const indexRecado = recados.findIndex((recado) => recado.id === id);
    form.descricao.value = recados[indexRecado].descricao;
    form.detalhamento.value = recados[indexRecado].detalhamento;
    idx = id;
}

const atualizarRecado = (id, recado) => {
    const recados = recuperarLocalStorage();
    const indexRecado = recados.findIndex((r) => r.id === id);
    recados[indexRecado] = recado;
    atualizarLocalStorage(recados);
}


//SAINDO DO SISTEMS
document.querySelector('#btn-sair').addEventListener('click', (e)=>{
    e.preventDefault();
    sair()
  });

  function sair (){
    sessionStorage.removeItem("logado");
    localStorage.removeItem("session");
    window.location.href = "index.html";
  }


//EVENTOS
/* form === null || form === void 0 ? void 0 : */ form.addEventListener('submit', salvarRecado);
document.addEventListener('DOMContentLoaded', preencheTabela);