const input = document.querySelector('.js-input');
const textError = document.querySelector('.js-error');

input.addEventListener('keyup', (e) => {
  const value = e.target.value;

  try {
    if (!value) {
      throw new Error('Поле пустое');
    }
    if (!+value) {
      throw new Error('Только числа');
    }
    if (value < 5 || value > 10) {
      throw new Error('Не меньше 5 и не больше 10');
    }
    textError.textContent = '';
  } catch(error) {
    textError.textContent = error.message;
  }
});
