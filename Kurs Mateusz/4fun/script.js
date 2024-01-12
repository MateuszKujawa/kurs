const div = document.querySelector('.box');
function rotateDiv() {
    div.classList.toggle('clicked');
}

div.addEventListener('click', rotateDiv);