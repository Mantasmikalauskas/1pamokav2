function onKeyPress(e) {
  if (e.keyCode === 13) {
    loadMovies();
  }
}

function loadMovies() {
  const keyword = document.getElementById("movie-name").value;

  if (keyword.length > 0) {
    axios
      .get("https://api.tvmaze.com/search/shows?q=" + keyword)
      .then((response) => {
        const moviesContainer = document.createElement("div");
        moviesContainer.className = "movies-container";

        for (const item of response.data) {
          const title = item.show.name;
          const year = item.show.premiered.slice(0, -6);
          const imgLink = item.show.image.medium;
          const genres = item.show.genres;
          const summary = item.show.summary;

          const movieDiv = document.createElement("div");
          movieDiv.className = "movie";
          movieDiv.innerHTML = `
        <img src="${imgLink}" alt="${title}"/>
        <h3>${title} (${year})</h3>
        <p>Genres: ${genres.join(", ")}</p>
        <p>${summary}</p>
    `;

          moviesContainer.appendChild(movieDiv);
        }

        document.querySelector(".filmai").innerHTML = moviesContainer.outerHTML;
      })
      .catch((err) => console.log(err));
  }
}
