document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav-links');
  
  function toggleMenu() {
    navMenu.classList.toggle('active');
  }
  
  menuButton.addEventListener('click', toggleMenu);

  // Pop up for app download button
const downloadBtn = document.querySelector('.btn-outline');
const popUpCard = document.querySelector('.coming-soon');

downloadBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  popUpCard.classList.toggle('hide');
})

document.body.addEventListener('click', () => {
  if (!popUpCard.classList.contains('hide')) {
      popUpCard.classList.add('hide');

  }
})


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

});