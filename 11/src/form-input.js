const $inputForm = document.querySelector('#input-form');
const $input = document.querySelector('#input');

$inputForm.addEventListener('submit', (event) => {
  //   console.log(event);
  event.preventDefault();
  const text = $input.value;
  //   console.log(text);
  $input.value = '';
});
