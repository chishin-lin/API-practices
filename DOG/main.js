let showDogImg = document.querySelector(".dog");

axios.get("https://dog.ceo/api/breeds/image/random").then((response) => {
  showDogImg.src = response.data.message;
});
