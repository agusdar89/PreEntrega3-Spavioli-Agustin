const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('night');
    btnSwitch.classList.toggle('active');
})

