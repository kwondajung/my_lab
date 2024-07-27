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

// Popular Movies GET 요청
fetch(url, options)
    .then(response => response.json())
    // .then(response => console.log(response))
    .then(data => {
        // poster_path, overview, title, vote_average 
        console.log(data);
        // let title = data['results']['0']['title'];
        const movies = data.results;
        const movieContainer = document.getElementById('movie-container');
        movies.forEach(movie => {
            const card = createMovieCard(movie);
            movieContainer.appendChild(card);
        });
    })
    .catch(err => console.error(err));

// 검색
// 윈도우가 준비됐을 때 해당 함수 실행
window.onload = function () {
    document.getElementById('search-button').addEventListener('click', () => {
        const query = document.getElementById('search-input').value.toLowerCase();
        const movieCards = document.querySelectorAll('.movie-card');
        movieCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            if (title.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    })
}

// 카드 생성
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
    <div>
        <div>
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path} alt="${movie.title}">
        </div>
        <h3>${movie.title}</h3>
        <p>${movie.overview}</p>
        <span>⭐: ${movie.vote_average}</span>
    </div>
        `;
    card.addEventListener('click', () => alert(`이 영화의 ID는 ${movie.id}입니다.`));
    return card;
}



// 개봉 예정작

const options2 = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer 5a3488ac1342b3f9bcf2ad06969cd295'
    }
  };


// 개인 API KEY
const url2 = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=ko&page=1&region=KR`;

// Popular Movies GET 요청
fetch(url2, options2)
    .then(response => response.json())
    .then(data2 => {
        console.log(data2);
        // let title = data['results']['0']['title'];
        const movies2 = data2.results;
        const movieContainer2 = document.getElementById('movie-container2');
        movies2.forEach(movie2 => {
            const card2 = createMovieCard2(movie2);
            movieContainer2.appendChild(card2);
        });
    })
    .catch(err => console.error(err));

    // 카드를 추가로 생성하기
// function createMovieCard2(movie2) {
//     const card2 = document.createElement('div');
//     card2.className = 'movie-card2';
//     card2.innerHTML = `
//         <div>
//             <img src="https://image.tmdb.org/t/p/w500${movie2.backdrop_path}">
//         </div>
//         `;
//     return card2;
// }


// 이미지 좌우 슬라이드
let slides = document.querySelectorAll("#movie-container2 > img");
let prev = document.querySelector("#prev");
let next = document.querySelectorAll("next");
let current = 0;


// 배열의 이미지 모두 숨긴 후 첫 번째 이미지만 보이게 하기
// none: 보이지 않게, block: 보이게
showSlide(current);

function showSlide(n) {
    for (let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[n].style.display = "block";
}

prev.onclick = preSlide;
next.onclick = nextSlide;

function preSlide() {
    if (current > 0) current -= 1;
    else current = slides.length - 1;
    showSlide(current);
}

function nextSlide() {
    if (current < slides.length - 1) current += 1;
    else current = 0;
    showSlide(current);
}