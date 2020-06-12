import { render } from './html-render';
import formInput from './form-input';
import './todos.css';
import { loadData } from './data-manager';
const $result = document.querySelector('#result');

const todos = loadData();

$result.addEventListener('click', (event) => {
  const { className } = event.target;
  if (className === 'delete') {
    const { index } = event.target.parentElement.dataset;
    todos.splice(index, 1);
    render(todos);
  } else if (className === 'toggle-checked') {
    const { index } = event.target.parentElement.dataset;
    todos[index].isDone = !todos[index].isDone;
  }
});
// console.log($inputForm);

formInput.init(todos);
render(todos);
