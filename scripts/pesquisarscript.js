const myKey = "d4f2f6d06e0c6ef4374c305f6d99782e";

async function fetchSearchMovies() {
  const queryStr = document.getElementById("searchInput").value;
  const query = queryStr.replace(/\s/g, "+");
  console.log(query);

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${myKey}&query=${query}&language=pt-BR`
  );
  const data = await res.json();
  const movieData = data.results;

  var output = "";

  for (var i in movieData) {
    if (movieData[i].poster_path === null || movieData[i].overview === "") {
      output += "";
    } else {
      output += `
      
  <div class="col-lg-4 col-sm-12 col-md-6">
      <div class="moviecard"  onclick="window.open('https://www.themoviedb.org/movie/${
        movieData[i].id
      }', '_blank')">
      <img src="http://image.tmdb.org/t/p/w500/${movieData[i].poster_path}">
      <p class="titulo">${movieData[i].title}</p>
      <p class="sinopse">${
        movieData[i].overview.length > 280
          ? movieData[i].overview.slice(0, 280) + ". . ."
          : movieData[i].overview
      }</p>
      <span class="data">Estreia:  ${movieData[i].release_date}</span>
      </div>
     
  </div> 
`;
    }
  }

  document.getElementById("bodybox").innerHTML = output;
  //   console.log(output)
}
