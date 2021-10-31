const title = document.querySelectorAll('[data-name="accordion-title"]');
title.forEach(item => {
    item.addEventListener('click', showContent);
});

function showContent(event) {
    this.nextElementSibling.classList.toggle('hidden');
    event.currentTarget.classList.toggle('color');
};

