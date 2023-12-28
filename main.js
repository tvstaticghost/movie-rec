const startBtn = document.getElementById('start-btn');

startBtn.addEventListener('click', runApi);

function runApi() {
    const apiKey = 'b4381557';
    const movieTitle = document.getElementById('movie-input').value;
    const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${movieTitle}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(ray => {
            const movieInfoElement = document.getElementById('movie-info');
            movieInfoElement.innerHTML = `<h2>${ray.Title}</h2>
                                        <p>Released: ${ray.Year}</p>
                                        <p>Genre: ${ray.Genre}</p>
                                        <p>Rated: ${ray.Rated}</p>
                                        <p>Plot: ${ray.Plot}</p>
                                        <p>Rotten Tomatoes Score: ${ray.Ratings[1].Value}</p>
                                        <img src="${ray.Poster}" alt="${ray.Title} Poster">`;
        })
        .catch(error => console.error('Error fetching data:', error));
}