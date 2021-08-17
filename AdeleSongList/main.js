// DEFAULT CODE
const BASE_URL = "https://lyric-api-403c0.firebaseio.com/";
const songList = document.querySelector("#song-list");
const lyricsPanel = document.querySelector("#lyrics-panel");
const album = {
  artist: "Adele",
  album: "25",
  tracks: [
    "Hello",
    "Send My Love (To Your New Lover)",
    "I Miss You",
    "When We Were Young",
    "Remedy",
    "Water Under the Bridge",
    "River Lea",
    "Love in the Dark",
    "Million Years Ago",
    "All I Ask",
    "Sweetest Devotion",
  ],
};
//Song Name Lists
function showSongName(album) {
  let navHtml = "";
  for (let song of album.tracks) {
    navHtml += `
      <li>
        <a class="nav-link" data-toggle="pill" href="#" role="tab"> ${song}</a>
      </li>`;
  }
  songList.innerHTML = navHtml;
}
//Lyrics
function showLyrics(songName) {
  axios.get(`${BASE_URL}Adele/${songName}.json`).then(function (response) {
    lyricsPanel.innerHTML = `
    <div class="lyrics-box">
  <h2>${songName}</h2>
  <pre>${response.data.lyrics}</pre>
  </div>`;
  });
}

songList.addEventListener("click", (e) => {
  showLyrics(e.target.innerText);
});

showSongName(album);
