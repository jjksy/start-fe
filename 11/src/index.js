import { render } from './html-render';
import './todos.css';

const $inputForm = document.querySelector('#input-form');
const $input = document.querySelector('#input');

const todoModel = {
  id: '',
  text: '',
  isDone: false,
};

const todos = [
  {
    text: 'aaa',
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

render(todos);
