function darkmode() {
    const nave = window.document.getElementById('nav');
    const fundo = window.document.getElementById('fundo');
    const negrito = window.document.getElementById('strong');
    const texto = window.document.getElementById('texto');
    const explore = window.document.getElementById('explore');
    const paleta = window.document.getElementById('colors');
    const mudanca = window.document.getElementById('blackorwhite');
    const iconeLua = window.document.getElementById('lua');
    let iconeSol = document.getElementById('sol');
    const painel = document.getElementById('painelcores');
    const textop = document.getElementById('textoprincipal');

    painel.classList.remove('aberto');

    if (!iconeSol) {
        iconeSol = document.createElement('i');
        iconeSol.id = 'sol';
        iconeSol.classList.add('fa-solid', 'fa-sun');
        iconeSol.style.color = 'white';
        iconeSol.style.padding = '7px';
        iconeSol.style.cursor = 'pointer';
        iconeSol.style.display = 'block';
        iconeSol.addEventListener('click', lightmode);
        mudanca.appendChild(iconeSol);
    } else {
        iconeSol.style.display = 'block';
    }

    textop.style.color = 'white';
    iconeLua.style.display = 'none';
    iconeSol.style.color = 'white';
    iconeSol.style.padding = '7px';
    mudanca.style.backgroundColor = '#232A2D';
    mudanca.style.marginRight = '50px';
    paleta.style.display = 'none';
    explore.style.backgroundColor = '#22292C';
    explore.style.boxShadow = '1px 1px 10px rgba(0, 0, 0, 0.300)';
    texto.style.color = 'white';
    negrito.style.color = 'white';
    nave.style.backgroundColor = '#232A2D';
    nave.style.boxShadow = '2px 1px 5px rgba(0, 0, 0, 0.479)';
    fundo.style.backgroundColor = '#232625';

                    explore.addEventListener('mouseenter', () => {
    explore.style.backgroundColor = '#090b0cff'; // Cor de hover
});

explore.addEventListener('mouseleave', () => {
    explore.style.backgroundColor = '#22292C'; // Cor original
});
}

function lightmode() {
    const nave = document.getElementById('nav');
    const fundo = document.getElementById('fundo');
    const negrito = document.getElementById('strong');
    const texto = document.getElementById('texto');
    const explore = document.getElementById('explore');
    const paleta = document.getElementById('colors');
    const mudanca = document.getElementById('blackorwhite');
    const iconeLua = document.getElementById('lua');
    const iconeSol = document.getElementById('sol');
    const textop = document.getElementById('textoprincipal');

    iconeSol.style.display = 'none';
    iconeLua.style.display = 'inline-block';

    mudanca.style.backgroundColor = '';
    mudanca.style.marginRight = '';
    paleta.style.display = '';
    paleta.style.backgroundColor = '';
    explore.style.backgroundColor = '';
    explore.style.boxShadow = '';
    texto.style.color = '';
    negrito.style.color = '';
    nave.style.backgroundColor = '';
    nave.style.boxShadow = '';
    fundo.style.backgroundColor = '';
    textop.style.color = '';

        explore.addEventListener('mouseenter', () => {
    explore.style.backgroundColor = '#0035af'; // Cor de hover
});

explore.addEventListener('mouseleave', () => {
    explore.style.backgroundColor = '#3E71E9'; // Cor original
});
}

function menu() {
    const seta = document.getElementById('arrownav');
    const painel = document.getElementById('painelcores');

    if (painel.classList.contains('aberto')) {
        painel.classList.remove('aberto');
        seta.style.transform = 'rotate(0deg)';
    } else {
        painel.offsetHeight; // força reflow
        painel.classList.add('aberto');
        seta.style.transform = 'rotate(179deg)';
    }
}

function limparSelecaoBotoes() {
    const botoes = document.querySelectorAll('#painelcores input[type="button"]');
    botoes.forEach(botao => {
        botao.classList.remove('circulo-selecionado');
        botao.style.boxShadow = '';
    });
}

function aplicarBordaBotao(botaoId) {
    const botao = document.getElementById(botaoId);
    botao.classList.add('circulo-selecionado');

    const corFundo = getComputedStyle(botao).backgroundColor;
    botao.style.boxShadow = `0 0 0 4px white, 0 0 0 6px ${corFundo}`;
}

function cor1() {
    limparSelecaoBotoes();

    const color = document.getElementById('switch');
    const negrito = document.getElementById('strong');
    const texto = document.getElementById('texto');
    const explore = document.getElementById('explore');
    const paleta = document.getElementById('colors');
    const mudanca = document.getElementById('blackorwhite');
    const nave = document.getElementById('nav');
    const textop = document.getElementById('textoprincipal');

    textop.style.color = '#172853ff';
    negrito.style.color = '#4070EB';
    color.style.color = '#4070EB';
    explore.style.backgroundColor = '#4070EB';
    mudanca.style.backgroundColor = '#0A3CB9';
    paleta.style.backgroundColor = '#0A3CB9';
    nave.style.backgroundColor = '#4070EB';

    document.getElementById('painelcores').classList.remove('aberto');

    aplicarBordaBotao('cor1');

    explore.addEventListener('mouseenter', () => {
    explore.style.backgroundColor = '#0035af'; // Cor de hover
});

explore.addEventListener('mouseleave', () => {
    explore.style.backgroundColor = '#3E71E9'; // Cor original
});
    
}

function cor2() {
    limparSelecaoBotoes();

    const color = document.getElementById('switch');
    const negrito = document.getElementById('strong');
    const texto = document.getElementById('texto');
    const explore = document.getElementById('explore');
    const paleta = document.getElementById('colors');
    const mudanca = document.getElementById('blackorwhite');
    const nave = document.getElementById('nav');
    const textop = document.getElementById('textoprincipal');

    textop.style.color = '#5e3d10ff';
    negrito.style.color = '#F7A027';
    color.style.color = '#F7A027';
    explore.style.backgroundColor = '#F7A027';
    nave.style.backgroundColor = '#F7A027';
    mudanca.style.backgroundColor = '#DD880F';
    paleta.style.backgroundColor = '#DD880F';

    document.getElementById('painelcores').classList.remove('aberto');

    aplicarBordaBotao('cor2');

        explore.addEventListener('mouseenter', () => {
    explore.style.backgroundColor = '#be802aff'; // Cor de hover
});

explore.addEventListener('mouseleave', () => {
    explore.style.backgroundColor = '#F7A027'; // Cor original
});
}

function cor3() {
    limparSelecaoBotoes();

    const color = document.getElementById('switch');
    const negrito = document.getElementById('strong');
    const texto = document.getElementById('texto');
    const explore = document.getElementById('explore');
    const paleta = document.getElementById('colors');
    const mudanca = document.getElementById('blackorwhite');
    const nave = document.getElementById('nav');
    const textop = document.getElementById('textoprincipal');

    textop.style.color = '#3c1b47ff';
    negrito.style.color = '#8D44A7';
    color.style.color = '#8D44A7';
    explore.style.backgroundColor = '#8D44A7';
    nave.style.backgroundColor = '#8D44A7';
    mudanca.style.backgroundColor = '#78398E';
    paleta.style.backgroundColor = '#78398E';

    document.getElementById('painelcores').classList.remove('aberto');

    aplicarBordaBotao('cor3');

            explore.addEventListener('mouseenter', () => {
    explore.style.backgroundColor = '#562966ff'; // Cor de hover
});

explore.addEventListener('mouseleave', () => {
    explore.style.backgroundColor = '#8D44A7'; // Cor original
});
}

function cor4() {
    limparSelecaoBotoes();

    const color = document.getElementById('switch');
    const negrito = document.getElementById('strong');
    const texto = document.getElementById('texto');
    const explore = document.getElementById('explore');
    const paleta = document.getElementById('colors');
    const mudanca = document.getElementById('blackorwhite');
    const nave = document.getElementById('nav');
    const textop = document.getElementById('textoprincipal');

    textop.style.color = '#19421eff';
    negrito.style.color = '#399946';
    color.style.color = '#399946';
    explore.style.backgroundColor = '#399946';
    nave.style.backgroundColor = '#399946';
    mudanca.style.backgroundColor = '#2C6C37';
    paleta.style.backgroundColor = '#2C6C37';

    document.getElementById('painelcores').classList.remove('aberto');

    aplicarBordaBotao('cor4');

                explore.addEventListener('mouseenter', () => {
    explore.style.backgroundColor = '#225829ff'; // Cor de hover
});

explore.addEventListener('mouseleave', () => {
    explore.style.backgroundColor = '#399946'; // Cor original
});
}
