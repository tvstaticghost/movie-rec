const startBtn = document.getElementById('start-btn');

startBtn.addEventListener('click', () => {
    runApi();
    setInterval(() => {
        addBoxShadow(document.getElementById('movie-picture')), 2000;
    });
    setInterval(() => {
        addBoxShadow(document.getElementById('movie-desc')), 2000;
    });
});

function runApi() {
    const apiKey = 'b4381557';
    const movieTitle = document.getElementById('movie-input').value;
    const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&t=${movieTitle}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const movieInfoElement = document.getElementById('movie-info');
            let genres = data.Genre;

            const genreSplit = splitString(genres);
            
            let genreBubbles = '';
            for (let i = 0; i < genreSplit.length; i++) {
                genreBubbles += `<span class="genre__bubble">${genreSplit[i]}</span>`;
            }

            movieInfoElement.innerHTML = `<div class="movie__wrapper">
                                        <div class="movie__picture rolled__edge" id="movie-picture">
                                        <h2>${data.Title}</h2>
                                        <img src="${data.Poster}" alt="${data.Title} Poster">
                                        <div class="movie__metadata">
                                            <p>${data.Year}</p>
                                            <p>${data.Rated}</p>
                                            <p>${data.Runtime}</p>
                                        </div>
                                        </div>
                                        <div class="movie__desc rolled__edge" id="movie-desc">
                                        <p><strong>Rotten Tomatoes Score:</strong> ${data.Ratings[1].Value}</p>
                                        <p></strong> ${data.Plot}</p>
                                        <p>${genreBubbles}</p>
                                        </div>
                                        </div>`;
        })
        .catch(error => console.error('Error fetching data:', error));
}

function splitString(string) {
    let stringWithoutCommas = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== ',') {
            stringWithoutCommas += string[i];
        }
    }

    const arrayResult = stringWithoutCommas.split(' ');

    return arrayResult;
}

function randomLength() {
    const random = Math.floor(Math.random() * 5 + 1);
    return random;
}

function boxShadow() {
    
    const elementArray = [
        document.getElementById('search-board'),
    ];
    
    elementArray[0].style.transitionDuration = '2s';
    elementArray[0].style.boxShadow = `3px 3px var(--black), 0 0 ${randomLength() * 20}px var(--white)`;
    
}

function addBoxShadow(element) {
    element.style.transitionDuration = '2s';
    element.style.boxShadow = `3px 3px var(--black), 0 0 ${randomLength() * 20}px var(--white)`;
}

boxShadow();
setInterval(boxShadow, 2000);