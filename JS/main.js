const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('night');
    btnSwitch.classList.toggle('active');

    //guardado en modo localstorage.
    if(document.body.classList.contains('night')){
        localStorage.setItem('night-mode', 'true');
    } else {
        localStorage.setItem('night-mode', 'false');
    }
});

//modo actual.
if(localStorage.getItem('night-mode') === 'true'){
    document.body.classList.add('night');
    btnSwitch.classList.add('active');
} else {
    document.body.classList.remove('night');
    btnSwitch.classList.remove('active');
}

