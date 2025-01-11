document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('contact-form');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Previne comportamentul implicit (refresh-ul paginii)

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const templateParamsContact = {
            from_name: name,
            to_mail: 'amdreeasarsama300@gmail.com',
            from_mail: email,
            message: message
        };

        emailjs.send('service_1wu7ipm', 'template_8565gfg', templateParamsContact)
            .then(function(response) {
                console.log('Email trimis cu succes către tine:', response);
                alert('Email trimis cu succes!');
            }, function(error) {
                console.log('Eșec la trimiterea emailului:', error);
                alert('Eroare la trimiterea emailului. Încearcă din nou!');
            });

        const templateParamsConfirmation = {
            from_name: name,
            to_mail: email,
            message: message
        };

        emailjs.send('service_1wu7ipm', 'template_1ua14hh', templateParamsConfirmation)
            .then(function(response) {
                console.log('Email trimis cu succes către utilizator:', response);
                popup.classList.remove('hidden');
            }, function(error) {
                console.log('Eșec la trimiterea emailului către utilizator:', error);
                alert('Eroare la trimiterea emailului. Încearcă din nou!');
            });
    });

    closePopup.addEventListener('click', () => {
        popup.classList.add('hidden');
    });
});
