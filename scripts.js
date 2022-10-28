const loadBtn = document.querySelector(".js-load");
const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");
const errorText = document.querySelector(".js-error");

const userBtn = document.querySelector(".user-load");
const userResultsContainer = document.querySelector(".user-results");
const userSearchInput = document.querySelector(".user-input");
const userErrorText = document.querySelector(".user-error");

loadBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  const searchValue = searchInput.value.trim().toLowerCase();
  if (!searchValue) {
    errorText.style.display = "block";
  } else {
    errorText.style.display === "block" ? errorText.style.display = "none": null;

    fetch(`https://api.github.com/users/${searchValue}`)
      .then((data) => data.json())
      .then(data => 
        (resultsContainer.innerHTML = `<div class="response-container">
                  <img src="${data.avatar_url}">
                  <p> Имя: <span>${data.name}</span><p>
                  <p> О себе: <span>${data.bio}</span><p>
                  <p> Кол-во репозиториев: <span>${data.public_repos}</span><p>
              </div>`)
      );
    }
});

userBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  const searchValue = +userSearchInput.value;
  if (searchValue < 1 || searchValue > 10) {
    userErrorText.style.display = "block";
  } else {
    userErrorText.style.display === "block" ? userErrorText.style.display = "none": null;
    
    axios.get(`https://jsonplaceholder.typicode.com/users/${searchValue}`)
      .then(res => res.data)
      .then(data => 
        (userResultsContainer.innerHTML = 
          `<div class="response-container">
            <p> Имя: <span>${data.name}</span><p>
            <p> Никнейм: <span>${data.username}</span><p>
            <p> Email: <span>${data.email}</span><p>
          </div>`)
      )
      .catch(() =>
        (userResultsContainer.innerHTML = 
          `<div class="response-container">
            <p><span>Пользователь не найден</span><p>
          </div>`)
        )
  }
});
