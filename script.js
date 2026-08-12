// 1. ALTERNÂNCIA DE TEMA (DARK / LIGHT MODE)
const themeBtn = document.getElementById('themeToggle');
let currentTheme = localStorage.getItem('theme') || 'light';

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  themeBtn.textContent = theme === 'dark' ? '☀️ Modo Claro' : '🌙 Modo Escuro';
  localStorage.setItem('theme', theme);
}

applyTheme(currentTheme);

themeBtn.addEventListener('click', () => {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(currentTheme);
});

// 2. FILTRO DE CARDS
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Atualiza botão ativo
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filterValue = btn.getAttribute('data-filter');

    // Oculta/Exibe os cards
    cards.forEach(card => {
      if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// 3. MODAL DE DETALHES
const modal = document.getElementById('infoModal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalTag = document.getElementById('modalTag');

function openModal(title, desc, tag) {
  modalTitle.textContent = title;
  modalDesc.textContent = desc;
  modalTag.textContent = tag;
  modal.classList.add('active');
}

function closeModal() {
  modal.classList.remove('active');
}

// Fechar modal ao clicar fora dele
window.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

// 4. GERADOR ALEATÓRIO DE RECOMENDAÇÃO
const recommendations = [
  "🎮 Experimente jogar um RPG Indie hoje!",
  "📚 Leia 15 páginas de um livro de ficção científica.",
  "🎨 Tente desenhar um objeto da sua mesa em 5 minutos.",
  "🎧 Ouça uma playlist de Lofi enquanto toma um café.",
  "✍️ Escreva um mini diário sobre o que você aprendeu nesta semana."
];

const suggestBtn = document.getElementById('suggestBtn');
const recText = document.getElementById('recommendation-text');

suggestBtn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * recommendations.length);
  recText.textContent = recommendations[randomIndex];
});
