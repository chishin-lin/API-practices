let btn = document.querySelector("button");
let card = document.querySelector(".card");

btn.addEventListener("click", (e) => {
  axios.get("https://randomuser.me/api/").then(function (response) {
    let info = response.data.results[0];
    card.innerHTML = `
    <h5 class="card-title">${info.name.first} ${info.name.last}</h5>
    <img src="${info.picture.large}" class="" alt="..." />
    <p class="card-text">${info.email}</p>`;
  });
});
