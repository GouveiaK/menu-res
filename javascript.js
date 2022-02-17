const button = document.getElementById('btn');

function mudarmenu(){
    const menulista = document.getElementById('menu');
    menulista.classList.toggle('active');
}

button.addEventListener('click', mudarmenu);