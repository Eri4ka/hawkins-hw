const button = document.querySelector('.button');

const checkBackground = () => {
    if (localStorage.getItem('night') === 'false') {
        document.body.classList.remove('night');
        button.classList.remove('button-night');
    } else {
        document.body.classList.add('night');
        button.classList.add('button-night');
    }
};

button.addEventListener('click', () => {
    if (localStorage.getItem('night') === 'true') {
        localStorage.setItem('night', 'false');
        document.body.classList.remove('night');
        button.classList.remove('button-night');
    } else {
        localStorage.setItem('night', 'true');
        document.body.classList.add('night');
        button.classList.add('button-night');
    }
});

checkBackground();
