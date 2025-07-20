// Lista dos elogios que vão aparecer
const compliments = [
  "Você é a pessoa mais incrível que eu conheço.",
  "Seu sorriso ilumina o meu dia.",
  "Estar contigo é meu lugar favorito no mundo.",
  "Te amo mais do que palavras podem dizer.",
  "Você é minha inspiração diária.",
  "Com você, tudo fica mais bonito.",
  "Você tem o coração mais doce que existe.",
  "Cada momento ao seu lado é especial."
];

let currentIndex = 0;

// Pega a div onde os elogios aparecem
const complimentsDiv = document.querySelector('.compliments');

// Função para mostrar o elogio atual e mudar para o próximo
function showCompliment() {
  complimentsDiv.textContent = compliments[currentIndex];
  currentIndex++;
  if (currentIndex >= compliments.length) {
    currentIndex = 0;
  }
}

// Mostra o primeiro elogio já quando a página carregar
showCompliment();

// Depois muda o elogio a cada 3 segundos (3000 milissegundos)
setInterval(showCompliment, 3000);
