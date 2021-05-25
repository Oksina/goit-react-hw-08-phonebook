  
const input = document.querySelector('#name-input');
const nameInGreeting = document.querySelector('#name-output');

input.addEventListener('input', e => {
    const text = e.target.value;
    if (text.length > 0 && text !== '') {
        nameInGreeting.textContent = text.trim()
    }
    else nameInGreeting.textContent = 'незнакомец'
});