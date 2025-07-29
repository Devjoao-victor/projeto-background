function darkmode() {
    const nave = window.document.getElementById('nav')
    const fundo = window.document.getElementById('fundo')
    const negrito = window.document.getElementById('strong') 
    const texto = window.document.getElementById('texto')
    const explore = window.document.getElementById('explore')
    const paleta = window.document.getElementById('colors')
    const mudanca = window.document.getElementById('blackorwhite')
    const iconeLua = window.document.getElementById('lua')
    let iconeSol = document.getElementById('sol');
        // Verifica se o ícone do sol já existe
    
    // Se não existe, cria e adiciona
    if (!iconeSol) {
        iconeSol = document.createElement('i');
        iconeSol.id = 'sol'; // adiciona ID para controle
        iconeSol.classList.add('fa-solid', 'fa-sun');
        iconeSol.style.color = 'white';
        iconeSol.style.padding = '7px';
        iconeSol.style.cursor = 'pointer';
        iconeSol.style.display = 'block'
        
        // Adiciona evento para reverter o modo
        iconeSol.addEventListener('click', lightmode);
        
        mudanca.appendChild(iconeSol);
    } else {
        iconeSol.style.display = 'block';
    }
    
    iconeLua.style.display = 'none'
    iconeSol.classList.add('fa-solid', 'fa-sun');
    iconeSol.style.color = 'white'
    iconeSol.style.padding = '7px'
    mudanca.style.backgroundColor = '#232A2D'
    mudanca.style.marginRight = '50px'
    paleta.style.display = 'none'
    explore.style.backgroundColor = '#22292C'
    explore.style.boxShadow = '1px 1px 10px rgba(0, 0, 0, 0.300)'
    texto.style.color = 'white'
    negrito.style.color = 'white'
    nave.style.backgroundColor = '#232A2D'
    nave.style.boxShadow = '2px 1px 5px rgba(0, 0, 0, 0.479)'
    fundo.style.backgroundColor = '#232625'
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

  // Esconde o ícone do sol e mostra o da lua
  iconeSol.style.display = 'none';
  iconeLua.style.display = 'inline-block';

  // Remove estilos inline para que o CSS original do arquivo volte a valer
  mudanca.style.backgroundColor = '';
  mudanca.style.marginRight = '';
  paleta.style.display = '';
  explore.style.backgroundColor = '';
  explore.style.boxShadow = '';
  texto.style.color = '';
  negrito.style.color = '';
  nave.style.backgroundColor = '';
  nave.style.boxShadow = '';
  fundo.style.backgroundColor = '';
}

function menu() {
  const seta = document.getElementById('arrownav');
  const painel = document.getElementById('painelcores');
  painel.classList.toggle('aberto');

  // Alterna a exibição do painel
  if (painel.style.display === 'block') {
    painel.style.display = 'none';
    seta.style.transform = 'rotate(0deg)';
  } else {
    painel.style.display = 'block';
    seta.style.transform = 'rotate(179deg)';
  }
}