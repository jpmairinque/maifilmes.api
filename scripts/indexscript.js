window.onload = () => {
  const myKey = "d4f2f6d06e0c6ef4374c305f6d99782e";
  const fetchMovies = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${myKey}&language=pt-BR&page=1`
    );
    const data = await res.json();
    const movieData = data.results;
    console.log(movieData);

    var output = "";

    for (var i in movieData) {
      output += `
        
    <div onclick="window.open('https://www.themoviedb.org/movie/${
      movieData[i].id
    }', '_blank')" class="col-lg-4 col-sm-12 col-md-6">
        <div class="moviecard"> 
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

    document.getElementById("bodybox").innerHTML = output;
    //   console.log(output)
  };

  fetchMovies();
};
