document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', function() {
            const currentlyOpen = document.querySelector('.accordion-content.open');
            if (currentlyOpen && currentlyOpen !== this.nextElementSibling) {
                currentlyOpen.classList.remove('open');
                currentlyOpen.style.display = 'none';
            }

            const content = this.nextElementSibling;
            if (content.classList.contains('open')) {
                content.classList.remove('open');
                content.style.display = 'none';
            } else {
                content.classList.add('open');
                content.style.display = 'block';
            }
        });
    });
});
