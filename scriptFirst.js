document.addEventListener('DOMContentLoaded', function() {
    const usernameInput = document.getElementById('username');

    usernameInput.addEventListener('input', function(event) {
        const inputValue = event.target.value;
        event.target.value = inputValue.replace(/[0-9]/g, '');
    });
});
