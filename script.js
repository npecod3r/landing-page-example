document.addEventListener('DOMContentLoaded', () => {
    // 1. Мобильное бургер-меню
    const burgerBtn = document.getElementById('burgerBtn');
    const navLinks = document.getElementById('navLinks');

    burgerBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // 2. Управление модальным окном
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalOverlay = document.getElementById('modalOverlay');

    openModalBtn.addEventListener('click', () => {
        modalOverlay.classList.add('active');
    });

    closeModalBtn.addEventListener('click', () => {
        modalOverlay.classList.remove('active');
    });

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
        }
    });

    // 3. Обработка отправки формы
    const form = document.getElementById('contactForm');
    const statusMsg = document.getElementById('statusMsg');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('nameInput').value.trim();
        
        statusMsg.style.color = '#4ade80';
        statusMsg.textContent = `Спасибо, ${name}! Мы свяжемся с вами в течение часа.`;
        form.reset();

        setTimeout(() => {
            modalOverlay.classList.remove('active');
            statusMsg.textContent = '';
        }, 2500);
    });
});