const numeroDeCarecteresDaSenha = document.querySelector(
    '#numeroDeCarecteresDaSenha'
);

const senhaFormada = document.querySelector('#senhaGerada');

const gerarSenha = document
    .getElementById('gerarSenha')
    .addEventListener('click', funcaoGerarSenha);

const caracteres =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'.split('');

function naoExisteNumeroDeCaracteres() {
    if (numeroDeCarecteresDaSenha.value == '') {
        alert('Digite o tamanho da sua senha');
        return;
    }
}

function criarSenhaCodificada() {
    let codigoParaSenha = '';
    let tamanhoDoArrayDeCaracteres = caracteres.length;

    for (let index = 0; index < numeroDeCarecteresDaSenha.value; index++) {
        codigoParaSenha +=
            caracteres[Math.floor(Math.random() * tamanhoDoArrayDeCaracteres)];
    }

    let senhaGerada = document.createTextNode(codigoParaSenha);

    return senhaFormada.appendChild(senhaGerada);
}

function jaExisteSenhaCriada() {
    senhaFormada.innerHTML = '';
}

function funcaoGerarSenha(evento) {
    evento.preventDefault();

    jaExisteSenhaCriada();

    naoExisteNumeroDeCaracteres();

    criarSenhaCodificada();
}
