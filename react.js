
  let currentIndex = 0;
  const carousel = document.querySelector('.carousel');
  const dots = document.querySelectorAll('.dot');
  const totalSlides = document.querySelectorAll('.card').length;

  function goToSlide(index) {
    currentIndex = index;
    carousel.scrollTo({
      left: window.innerWidth * currentIndex,
      behavior: 'smooth'
    });
    updateDots();
  }

  function updateDots() {
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  function autoSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    goToSlide(currentIndex);
  }

 
  let autoSlideInterval = setInterval(autoSlide, 5000);


  carousel.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
  carousel.addEventListener('mouseleave', () => autoSlideInterval = setInterval(autoSlide, 5000));

const cards = document.querySelectorAll('.card-f');

cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * 8;
    const rotateY = (x / rect.width - 0.5) * -8;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = `rotateX(0) rotateY(0) scale(1)`;
  });
});