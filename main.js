document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const form = event.target;
    const formData = new FormData(form);

    fetch('https://formspree.io/f/xblrjldv', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                document.getElementById('successMessage').style.display = 'block';
                form.reset();
            } else {
                return response.json().then(data => {
                    if (data.errors) {
                        throw new Error(data.errors.map(error => error.message).join(', '));
                    }
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});