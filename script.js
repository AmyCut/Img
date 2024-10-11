document.getElementById('thankYouButton').addEventListener('click', function() {
  const message = document.getElementById('message');
  message.textContent = 'GRAZIE';
  message.classList.add('show');

  // Cambia colore ogni secondo per un effetto di animazione
  let colors = ['#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#00ffff', '#ffff00'];
  let i = 0;
  setInterval(function() {
    message.style.color = colors[i];
    i = (i + 1) % colors.length;
  }, 500);
});
