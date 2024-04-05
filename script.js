const carousel = document.querySelector('.carousel');
const items = document.querySelector('.carousel-items');
const leftArrow = document.querySelector('.carousel-arrow.left');
const rightArrow = document.querySelector('.carousel-arrow.right');
let currentSlide = 0;

function moveSlide(direction) {
  const width = carousel.offsetWidth; // Get the carousel width
  const slideCount = items.children.length; // Get the total number of slides

  if (direction === 'left') {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = slideCount - 1;
    }
  } else if (direction === 'right') {
    currentSlide++;
    if (currentSlide >= slideCount) {
      currentSlide = 0;
    }
  }

  items.style.transform = `translateX(${currentSlide * -width}px)`; // Update position based on currentSlide
}

leftArrow.addEventListener('click', () => moveSlide('left'));
rightArrow.addEventListener('click', () => moveSlide('right'));

function update(name, target, step){
  const counterEl = document.querySelector(name);
  const targetCount = target; // Change this to your desired end number

  let currentCount = 0;

  function updateCounter() {
    if (currentCount < targetCount) {
      currentCount += Math.ceil(Math.random() * step); // Increase by a fixed amount each frame
      counterEl.textContent = Math.min(currentCount, target);
      requestAnimationFrame(updateCounter);
    }
  }
  updateCounter();
}
update("#counter1", 60000, 500);
update("#counter2", 800, 6);
update("#counter3", 82000, 650);
