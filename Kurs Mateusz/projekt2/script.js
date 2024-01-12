const sizeUpBtn = document.querySelector('.sizeUp');
const sizeDownBtn = document.querySelector('.sizeDown');
const colorBtn = document.querySelector('.color');
const text = document.querySelector('p');

let fontSize = 36;

const sizeUp = () => {
    if(fontSize >= 70) return 

    fontSize += 5;
    text.style.fontSize = fontSize + 'px';
}

const sizeDown = () => {
    if(fontSize <= 21) return

    fontSize -= 5;
    text.style.fontSize = fontSize + 'px';
}




const colorChanger = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    text.style.color = `rgb(${r},${g},${b})`;
}

sizeUpBtn.addEventListener('click', sizeUp);
sizeDownBtn.addEventListener('click', sizeDown);
colorBtn.addEventListener('click', colorChanger);