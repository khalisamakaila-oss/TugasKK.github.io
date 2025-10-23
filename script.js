// script.js

function toggleCard(card) {
  const content = card.querySelector('.card-content');
  const all = document.querySelectorAll('.card-content');
  
  // Close all other open cards
  all.forEach(c => {
    if (c !== content) c.style.display = 'none';
  });
  
  // Toggle the clicked card's content
  content.style.display = (content.style.display === 'block') ? 'none' : 'block';
}