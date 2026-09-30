document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  const indicatorsContainer = document.querySelector('.carousel-indicators');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');


  const projectDetails = [
    {
      id: 1,
      name: 'ClayCraft',
      description: 'E-commerce prototype built with HTML, CSS, and JavaScript. Features multi-page navigation, product details fetched via URL parameters, and a cart system managed using localStorage.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: 'assets/images/UIplaceholderB.png',
      alt: 'ClayCraft project image'
    },
    {
      id: 2,
      name: 'Kanji-Ninja',
      description: 'A language-agnostic learning suite built with React and Tailwind CSS. Features a modular CRUD system to master everything from Asian logographs (Kanji, Chinese) to Latin-based vocabularies in one unified interface.',
      tech: ['React.js', 'Tailwind CSS', 'JavaScript'],
      image: 'assets/images/UIplaceholderC.png',
      alt: 'Kanji-Ninja project image'
    },
    {
      id: 3,
      name: 'PixelMorph',
      description: 'A high-performance image processing engine built with React and Tailwind CSS. Features a refined UI with Context API for seamless theme synchronization and instant client-side format conversion.',
      tech: ['React.js', 'Tailwind CSS', 'TypeScript'],
      image: 'assets/images/UIplaceholderA.png',
      alt: 'PixelMorph project image'
    },
    {
      id: 4,
      name: 'TicTacToe',
      description: 'A modern, mobile-first game built with React and Tailwind. Focuses on clean UI/UX patterns, featuring seamless state management and a distraction-free, responsive design.',
      tech: ['React.js', 'Tailwind CSS', 'Context API'],
      image: 'assets/images/UIplaceholder.png',
      alt: 'TicTacToe project image'
    },
  ];

  if (carousel) {
    let currentIndex = 0;

    projectDetails.forEach((project, index) => {
      //project card
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card';
      projectCard.innerHTML = `
      <div class="project-image">
        <img src="${project.image}" alt="${project.alt}">
      </div>
      <div class="project-info">
        <h3 class="project-name">${project.name}</h3>
        <p class="project-description">
          ${project.description}
        </p>
        <div class="project-tech">
          ${project.tech.map(stack => `<span class="tech-tag">${stack}</span>`).join('')}
        </div>
      </div>
    `;
      carousel.appendChild(projectCard);

      //indicator dot
      const indicator = document.createElement('span');
      indicator.className = index === 0 ? 'indicator active' : 'indicator';
      indicator.dataset.index = index;
      indicatorsContainer.appendChild(indicator);
    });

    const indicators = document.querySelectorAll('.indicator');

    //updating the carousel
    function updateCarousel() {
      carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

      indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
      });
    }

    // next button
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % projectDetails.length;
      updateCarousel();
    });

    // previous button
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + projectDetails.length) % projectDetails.length;
      updateCarousel();
    });

    // indicator clicks
    indicators.forEach((indicator) => {
      indicator.addEventListener('click', (e) => {
        currentIndex = parseInt(e.target.dataset.index);
        updateCarousel();
      });
    });
  }
  //Get current year for footer
  document.getElementById('current-year').textContent = new Date().getFullYear()

  //Form submit
  const contactForm = document.querySelector('.contactForm form')
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault()
    confirm('Your form has been submitted successfully')
    contactForm.reset()
  })

});