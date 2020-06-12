import { render } from './html-render';
import formInput from './form-input';
import './todos.css';
const $result = document.querySelector('#result');

const todos = [
  {
    text: 'aaa',
    isDone: false,
  },
];
$result.addEventListener('click', (event) => {
  const className = event.target.className;
  if (className === 'delete') {
    console.log('delete');
  } else if (className === 'togle-checked') {
  }
});
// console.log($inputForm);

formInput.init(todos);
render(todos);
