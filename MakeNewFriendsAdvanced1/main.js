let btn = document.querySelector("button");
let card = document.querySelector(".card");
let box = document.querySelector(".cards");

btn.addEventListener("click", (e) => {
  axios
    .get("https://randomuser.me/api/?gender=female&results=3")
    .then(function (response) {
      for (let i = 0; i < 3; i++) {
        let info = response.data.results[i];
        box.innerHTML += `
        <div class="card" style="width: 15rem">
        <h5 class="card-title">${info.name.first} ${info.name.last}</h5>
        <img src="${info.picture.large}" class="" alt="..." />
        <div class="email">
        <p class="card-text">${info.email}</p>
        </div>
        </div>`;
      }
    });
});
