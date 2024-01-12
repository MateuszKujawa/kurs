const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change');
const one = document.querySelector('.one');
const two = document.querySelector('.two');

let fahrenheit
let celsius
// T(°F) = F(°C) x 1.8 + 32
//  T(°C) = (T(°F) - 32) / 1.8


const swap = () => { 
    if(one.textContent === '°C'){
        one.textContent = '°F';
        two.textContent = '°C';
        result.textContent = '';
    }else {
        one.textContent = '°C';
        two.textContent = '°F';
        result.textContent = '';
    }
}    

const fahrToCel = () => {
    fahrenheit = (converter.value * 1.8) + 32;
    result.textContent = `${converter.value}°C to ${fahrenheit.toFixed(1)}°F`
    converter.value = '';
}

const celToFahr = () => {
    celsius = (converter.value - 32) / 1.8;
    result.textContent = `${converter.value}°F to ${celsius.toFixed(1)}°C`;
    converter.value = '';
}


const conversion = () => {
    if(converter.value != ''){
        
        if(one.textContent === '°F'){
            celToFahr()
        } else {
            fahrToCel()
        }

    } else {
        result.textContent = 'Musisz podać wartość!'
    }
}

const resetFunction = () => {
    result.textContent = '';
    converter.value = '';
}

changeBtn.addEventListener('click', swap);

convBtn.addEventListener('click', conversion);

resetBtn.addEventListener('click', resetFunction);