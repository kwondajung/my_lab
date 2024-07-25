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
        // 데이터를 불러와서 카드 리스트에 뿌려야 되지 않을까..?
        // 필요한 데이터: 제목, 줄거리, 포스터 이미지 경로, 평점
        // let title = data['RESPONSE']['object']['results']['0']['original_title'];
        // console.log(title);
    })

    .catch(err => console.error(err));
