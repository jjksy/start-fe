fetch('isuue.json')
  .then((res) => console.log(res))
  .catch((e) => console.log(111, e));

fetch('http://asdsfd.com').catch((e) => console.log(11, e));
const promise = fetch('fetch.html');
promise.then((res) => console.log(res));
