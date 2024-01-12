const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const showMsg = () => { 

    if(pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers) && pass.value.match(special)){
        p.textContent = 'Bardzo mocne hasło! 💪';
        p.style.color = 'lime';
    }else if(pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers)){
        p.textContent = 'Mocne hasło 😎';
        p.style.color = 'gold';
    }else {
        p.textContent = 'Słabe hasło 😢';
        p.style.color = 'tomato';
    }

}

const checkPassoword = () => {
    if(pass.value !== '') {
        showMsg()
    } else {
        p.textContent = 'Nie podałeś hasła...';
        p.style.color = '';
    }
}


pass.addEventListener('keyup', checkPassoword);