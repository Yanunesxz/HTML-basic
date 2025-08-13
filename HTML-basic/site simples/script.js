const btnToggle = document.getElementById('theme-toggle');
const body = document.body;

btnToggle.addEventListener('click', () => {
  const darkModeActive = body.classList.toggle('dark-theme');

  if (darkModeActive) {
    btnToggle.textContent = 'Ativar Tema Claro';
    btnToggle.setAttribute('aria-label', 'Ativar tema claro');
    btnToggle.setAttribute('aria-pressed', 'true');
  } else {
    btnToggle.textContent = 'Ativar Tema Escuro';
    btnToggle.setAttribute('aria-label', 'Ativar tema escuro');
    btnToggle.setAttribute('aria-pressed', 'false');
  }
});