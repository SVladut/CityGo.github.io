document.addEventListener('DOMContentLoaded', () => {

    const rezervareForm = document.getElementById('rezervare-form');

    // Așteaptă trimiterea formularului de rezervare
    rezervareForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Previne comportamentul implicit (refresh-ul paginii)

        // Obține datele din formular
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;
        const car = document.getElementById('car').value;

        // Parametrii pentru template-ul de rezervare (emailul care va ajunge la tine)
        const templateParamsReservation = {
            from_name: name,
            to_email: 'andreeasarsama301@gmail.com', // Adresa ta de email
            from_mail: email, // Adresa utilizatorului
            phone: phone, // Numărul de telefon
            start_date: startDate,
            end_date: endDate,
            car: car
        };

        // Trimiterea emailului către tine pentru rezervare
        emailjs.send('service_5d2v6jy', 'template_dkrnkfi', templateParamsReservation)
            .then(function(response) {
                console.log('Email trimis cu succes pentru rezervare:', response);
            }, function(error) {
                console.log('Eșec la trimiterea emailului de rezervare:', error);
                alert('Eroare la trimiterea rezervării. Încearcă din nou!');
            });

        // Parametrii pentru template-ul de confirmare (emailul care va ajunge la utilizator)
        const templateParamsConfirmation = {
            from_name: name,
            to_email: email, // Adresa ta de email
            phone: phone, // Numărul de telefon
            start_date: startDate,
            end_date: endDate,
            car: car
         };

        // Trimiterea emailului de confirmare către utilizator
        emailjs.send('service_5d2v6jy', 'template_ixxybf6', templateParamsConfirmation)
            .then(function(response) {
            }, function(error) {
                console.log('Eșec la trimiterea emailului de confirmare:', error);
                alert('Eroare la trimiterea confirmării. Încearcă din nou!');
            });
    });

});
