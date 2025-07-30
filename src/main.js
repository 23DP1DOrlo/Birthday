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


  const fallingContainer = document.querySelector(".falling-objects");
  const imageSources = [
    "WebPage/src/images/svg/cube.svg"
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
      }, 600);
    }
  });
  