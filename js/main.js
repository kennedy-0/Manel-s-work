const botoes = document.querySelectorAll('.nav-btn');
const paginas = document.querySelectorAll('.pagina');

function navegar(id) {
    const destino = document.getElementById(id);

    if (!destino || destino.classList.contains('ativo')) return;

    paginas.forEach(pagina => {
        pagina.classList.remove('ativo');
    });

    botoes.forEach(botao => {
        botao.classList.toggle(
            'ativo',
            botao.dataset.pagina === id
        );
    });

    destino.classList.add('ativo');
}

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        navegar(botao.dataset.pagina);
    });
});

navegar('start');
