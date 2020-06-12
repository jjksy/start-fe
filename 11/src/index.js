import { render } from './html-render';
import formInput from './form-input';
import './todos.css';
const $result = document.querySelector('#result');

const todos = [
  //   {
  //     text: 'aaa',
  //     isDone: false,
  //   },
];
$result.addEventListener('click', (event) => {
  const { className } = event.target;
  if (className === 'delete') {
    // console.log('delete');
    const { index } = event.target.parentElement.dataset;
    todos.splice(index, 1);
    render(todos);
    // console.log(index);
  } else if (className === 'togle-checked') {
    const { index } = event.target.parentElement.dataset;
    todos[index].isDone = !todos[index].isDone;
  }
});
// console.log($inputForm);

formInput.init(todos);
render(todos);
