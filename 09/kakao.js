const $btn = document.querySelector('#search-btn');
const $text = document.querySelector('#search-text');
const url = 'https://dapi.kakao.com/v2/search/web';
const headers = {
  Authorization: 'KakaoAK 0a0905f3178b20305fd9f550e69feab5',
};
function success(data) {
  //   console.log(result);
  //result.json().then((data) => {
  const { documents } = data;
  document.map((doc) => {
    return `<li class="list-group-item"></li>`;
  });
  console.log(data);
  //});
}
function error() {
  alert('데이터를 불러올 수 없습니다');
}
function search() {
  const { value } = $text;
  if ($text.value === '') {
    alert('검색어를 입력하세요');
    return false;
  }

  fetch(`${url}?query=${value}`, { headers })
    .then((res) => res.json())
    .then(success)
    .catch(error);
  return true;
}
$btn.addEventListener('click', search);
