//  인기 영화 오픈 API 불러오기
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

// 인기 영화 GET 요청
fetch(url, options)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // let title = data['results']['0']['title'];
        const movies = data.results;
        const movieContainer = document.getElementById('popular-movie-container');

        movies.forEach(movie => {
            const card = createMovieCard(movie);
            movieContainer.appendChild(card);
        });
    })
    .catch(err => console.error(err));

// 검색
// 윈도우가 준비됐을 때 해당 함수 실행
// window.onload = function () {
document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-input').value.toLowerCase();
    const movieCards = document.querySelectorAll('.popular-movie-card');
    movieCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
})
// }

// 엔터키로 검색하기
// const input = document.querySelector('.search-input');
// input.addEventListener('keyup', (event) => {
//   if (event.keyCode === 13) {
//     document.getElementById('search-btn').click();
//   }
// });


// 인기 영화 카드 생성
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'popular-movie-card';
    card.innerHTML = `
    <div>
        <div>
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path} alt="${movie.title}" class="popular-img">
        </div>
        <h3>${movie.title}</h3>
        <p>${movie.overview}</p>
        <span class="star">⭐: ${movie.vote_average}</span>
    </div>
        `;
    card.addEventListener('click', () => alert(`<${movie.title}>의 ID는 ${movie.id}입니다.`));
    return card;
}

// // 개봉 예정작 오픈 API 불러오기
const options2 = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer 5a3488ac1342b3f9bcf2ad06969cd295'
    }
};

// 개인 API KEY
const url2 = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=ko&page=1&region=KR`;

// 개봉 예정작 GET 요청
fetch(url2, options2)
    .then(response => response.json())
    .then(data2 => {
        console.log(data2);
        // let title = data['results']['0']['title'];
        const movies2 = data2.results;
        const movieContainer2 = document.getElementById('soon-movie-container');

        movies2.forEach(movie2 => {
            const card2 = createMovieCard2(movie2);
            movieContainer2.appendChild(card2);
        });
    })
    .catch(err => console.error(err));

// 개봉 예정작 카드 생성
function createMovieCard2(movie2) {
    const card2 = document.createElement('div');
    card2.className = 'soon-movie-card';
    card2.innerHTML = `
        <div>
            <img src="https://image.tmdb.org/t/p/w500${movie2.poster_path}" alt="${movie2.title}"  class="soon-img">
        </div>
        <h3>${movie2.title}</h3>
        <p>${movie2.release_date}</p>
        `;
    card2.addEventListener('click', () => alert(`<${movie2.title}>의 ID는 ${movie2.id}입니다.`));
    return card2;
}

// top 버튼


// 캐러셀
