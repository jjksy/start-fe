import './todos.css';

const $inputForm = document.querySelector('#input-form');
const $input = document.querySelector('#input');
const $result = document.querySelector('#result');

const todoModel = {
  id: '',
  text: '',
  isDone: false,
};
// console.log($inputForm);

$inputForm.addEventListener('submit', (event) => {
  //   console.log(event);
  event.preventDefault();
  const text = $input.value;
  //   console.log(text);
  $input.value = '';
});

$result.innerHTML = '';
