document.addEventListener('DOMContentLoaded', () => {
    // Obține elementele relevante
    const form = document.getElementById('contact-form');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');

    // Afișează popup-ul când formularul este trimis
    if (form) { // Verifică dacă formularul există
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Previne comportamentul implicit (refresh-ul paginii)
            if (popup) { // Verifică dacă popup-ul există
                popup.classList.remove('hidden'); // Afișează popup-ul
            }
        });
    }

    // Închide popup-ul când utilizatorul apasă pe butonul "Închide"
    if (closePopup) { // Verifică dacă butonul de închidere există
        closePopup.addEventListener('click', () => {
            if (popup) {
                popup.classList.add('hidden'); // Ascunde popup-ul
            }
        });
    }

    // Activează meniul hamburger pe mobil
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    if (burger && navLinks) { // Verifică dacă elementele burger și navLinks există
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('show'); // Activează meniul pe mobil
        });
    }
});
