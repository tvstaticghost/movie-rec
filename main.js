const startBtn = document.getElementById('start-btn');

startBtn.addEventListener('click', runApi);

function runApi() {
    const apiKey = 'b4381557';
    const movieTitle = document.getElementById('movie-input').value;
    const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${movieTitle}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const movieInfoElement = document.getElementById('movie-info');
            movieInfoElement.innerHTML = `<div class="movie__info">
                                        <h2>${data.Title}</h2>
                                        <p><strong>Released:</strong> ${data.Year}</p>
                                        <p><strong>Genre:</strong> ${data.Genre}</p>
                                        <p><strong>Rated:</strong> ${data.Rated}</p>
                                        <p><strong>Plot:</strong> ${data.Plot}</p>
                                        <p><strong>Rotten Tomatoes Score:</strong> ${data.Ratings[1].Value}</p>
                                        <img src="${data.Poster}" alt="${data.Title} Poster"></div>`;
        })
        .catch(error => console.error('Error fetching data:', error));
}