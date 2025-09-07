// SCRIPT MENU MOBILE (HAMBURGER)
  const menuToggle = document.querySelector(".menu-toggle");
  const navUl = document.querySelector("nav ul");
  menuToggle.addEventListener("click", () => {
    navUl.classList.toggle("active");
  });
  // Tutup menu saat link di-klik
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
      navUl.classList.remove('active');
    });
  });
  // SCRIPT MODAL GALERI
  document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('gallery-modal');
    const modalImg = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-description');
    const serviceCards = document.querySelectorAll('.service-card');
    const closeBtn = document.querySelector('.close-button');
    serviceCards.forEach(card => {
      card.addEventListener('click', () => {
        const img = card.dataset.img;
        const title = card.dataset.title;
        const description = card.dataset.description;
        modalImg.src = img;
        modalTitle.textContent = title;
        modalDesc.textContent = description;
        
        modal.style.display = 'flex';
      });
    });
    const closeModal = () => {
      modal.style.display = 'none';
    };
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });
  });