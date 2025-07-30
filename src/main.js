function showImage(button, imagePath) {
    const card = button.parentElement;
    const imageContainer = card.querySelector('.extra-image');
  
    if (imageContainer.classList.contains('hidden')) {
      const img = document.createElement('img');
      img.src = imagePath;
      img.alt = 'Revealed image';
      imageContainer.appendChild(img);
      imageContainer.classList.remove('hidden');
      button.disabled = true;
      button.textContent = 'Нажатая кнопка';
      button.style.opacity = '0.6';
    }
  }


  const target = document.getElementById('birt');
const text = "С днем рождения солнышко мое самое любимое на свете, тебе теперь 18 годиков!❤️";
let animated = false;

function typeWriter(element, text, delay = 75) {
  let i = 0;
  const interval = setInterval(() => {
    element.textContent += text[i];
    i++;
    if (i === text.length) {
      clearInterval(interval);
    }
  }, delay);
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !animated) {
      typeWriter(target, text);
      animated = true;
    }
  });
}, {
  threshold: 0.6
});

observer.observe(target);

  const fallingContainer = document.querySelector(".falling-objects");
  const imageSources = [
    "src/heart.svg"
  ];
  
  function spawnFallingImage() {
    const img = document.createElement("img");
    img.src = imageSources[Math.floor(Math.random() * imageSources.length)];
    img.classList.add("falling");
    img.style.left = `${Math.random() * window.innerWidth}px`;
    fallingContainer.appendChild(img);
  
    setTimeout(() => {
      img.remove();
    }, 3000);
  }
  
  let scrollTimeout;
  window.addEventListener("scroll", () => {
    if (!scrollTimeout) {
      spawnFallingImage();
      scrollTimeout = setTimeout(() => {
        scrollTimeout = null;
      }, 60);
    }
  });
  