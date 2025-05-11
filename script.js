const genres = [
  { text: "Science Fiction", class: "scifi" },
  { text: "Romantik", class: "romantik" },
  { text: "Historia", class: "historia" },
];

let index = 0;
const genreEl = document.getElementById("genre-text");

function updateGenre() {
  const genre = genres[index];
  genreEl.textContent = genre.text;
  genreEl.className = `fs-1 fw-bold genre-text ${genre.class}`;
  index = (index + 1) % genres.length;
}

updateGenre();
setInterval(updateGenre, 3000);
