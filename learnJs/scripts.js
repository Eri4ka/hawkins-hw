const area = document.querySelector('#area');

area.value = localStorage.getItem('value');

area.addEventListener('keyup', (e) => {
    const value = e.target.value;
    localStorage.setItem('value', value);
});
