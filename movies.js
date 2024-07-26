//  TMDB 오픈 API 불러오기
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTM0ODhhYzEzNDJiM2Y5YmNmMmFkMDY5NjljZDI5NSIsIm5iZiI6MTcyMTgxMzUxNS42OTM4LCJzdWIiOiI2NmEwYmUyYzExMjk1NmE2ODE3MmFmOWUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.FkMYVRCauNqOHtt2I_CVAhF4855VuIAzNrW576OOnXE'
    }
};

// 개인 API KEY
const API_KEY = "5a3488ac1342b3f9bcf2ad06969cd295";
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko&page=1&region=KR`;

// GET 요청
fetch(url, options)
    .then(response => response.json())
    // .then(response => console.log(response))
    .then(data => {
        // 이후 데이터 처리
        // poster_path, overview, title, vote_average 
        console.log(data);
        // let title = data['results']['0']['title'];
        // let overview = data['results']['0']['overview'];
        // console.log(title);
        // console.log(overview);
        const movies = data.results;
        const movieContainer = document.getElementById('movie-container');
        movies.forEach(movie => {
            const card = createMovieCard(movie);
            movieContainer.appendChild(card);
        });

    })
    .catch(err => console.error(err));

// 카드 생성
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
    <div>
        <div>
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
        </div>
        <h3>${movie.title}</h3>
        <p>${movie.overview}</p>
        <span>⭐: ${movie.vote_average}</span>
    </div>
        `;
     // card.addEventListener('click', () => alert(`Movie ID: ${movie.id}`));
    return card;
}

// 카드 클릭 이벤트 => 클릭 시 alert 호출
// window.onload = function () {
//     var el = document.getElementById('showMeId');
//     el.onclick = hereId;
// }

// function hereId() {
//     alert('아이디?');
// }
