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

fetch(url, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .then(data => {
        // 이후 데이터 처리
        // 필요한 데이터: 제목, 줄거리, 포스터 이미지 경로, 평점
        // poster_path, overview, title, vote_average
        // 데이터 선언하기
        // temp_html로 뿌려주기
        let movies = data.results;
    })

    .catch(err => console.error(err));

function makeMovie(movie) {

    let poster_path = $('#poster_path').val();
    let title = $('#title').val();
    let overview = $('#overview').val();
    let vote_average = $('#vote_average').val();


    const card = document.makeMovie('div');
    let temp_html = `
        <div>
            <div>
                <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
            </div>
            <h3>${movie.title}</h3>
            <p>${movie.overview}</p>
            <p>⭐ ${movie.vote_average}</p>
        </div>`;
        $('#mycards').append(temp_html);

}


// 카드 클릭 이벤트 => 클릭 시 alert 호출
window.onload = function () {
    var el = document.getElementById('showMeId');
    el.onclick = hereId;
}

function hereId() {
    alert('아이디?');
}
