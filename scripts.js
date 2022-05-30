const d = document,
    btn = d.querySelector('.humburger-btn'),
    menu = d.querySelector('.navbar__titles');

btn.addEventListener('click', () => menu.classList.toggle('active'));