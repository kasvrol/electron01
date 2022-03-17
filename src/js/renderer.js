const opcaoDeTema = document.querySelector('#opcaoDeTema');
const botaoDeConfirmacaoDeTema = document
    .querySelector('#botaoDeConfirmacaoDeTema')
    .addEventListener('click', escolherTema);

async function escolherTema(evento) {
    evento.preventDefault();

    if (opcaoDeTema.value == 0) {
        const isDarkMode = await window.darkMode.toggle();
        document.getElementById('theme-source').innerHTML = isDarkMode
            ? 'Dark'
            : 'Light';
    } else if (opcaoDeTema.value == 1) {
        await window.darkMode.system();
        document.getElementById('theme-source').innerHTML = 'System';
    }
}

// document
//     .getElementById('toggle-dark-mode')
//     .addEventListener('click', async () => {
//         const isDarkMode = await window.darkMode.toggle();
//         document.getElementById('theme-source').innerHTML = isDarkMode
//             ? 'Dark'
//             : 'Light';
//     });

// document
//     .getElementById('reset-to-system')
//     .addEventListener('click', async () => {
//         await window.darkMode.system();
//         document.getElementById('theme-source').innerHTML = 'System';
//     });
