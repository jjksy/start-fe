import './todos.css';

const $inputForm = document.querySelector('#input-form');
const $input = document.querySelector('#input');
const $result = document.querySelector('#result');

const todoModel = {
  id: '',
  text: '',
  isDone: false,
};

const todos = [
  {
    text: 'js공부',
    isDone: false,
  },
];
// console.log($inputForm);

$inputForm.addEventListener('submit', (event) => {
  //   console.log(event);
  event.preventDefault();
  const text = $input.value;
  //   console.log(text);
  $input.value = '';
});

todos.map((todo, index) => {
  return `<li>
  <button class="delete">×</button>
  <input type="checkbox" class="toggle-checked">
  <span class="text">JS공부하기</span>
</li>`;
});
$result.innerHTML = '';
