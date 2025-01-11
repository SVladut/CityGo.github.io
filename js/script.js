
document.addEventListener('DOMContentLoaded', () => {
    // Obține elementele relevante
    const form = document.getElementById('contact-form');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');

    // Afișează popup-ul când formularul este trimis
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Previne comportamentul implicit (refresh-ul paginii)
        popup.classList.remove('hidden'); // Afișează popup-ul
    });

    // Închide popup-ul când utilizatorul apasă pe butonul "Închide"
    closePopup.addEventListener('click', () => {
        popup.classList.add('hidden'); // Ascunde popup-ul
    });
});
