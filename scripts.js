document.addEventListener('DOMContentLoaded', function() {
    // Validation et soumission du formulaire
    const form = document.getElementById('contact-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (form.checkValidity()) {
            confirmationMessage.classList.add('show');

            form.reset();
        } else {
            alert('Veuillez remplir tous les champs.');
        }
    });
});
