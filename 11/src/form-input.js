import todoModel from './todo-model';
import { render } from './html-render';

const $inputForm = document.querySelector('#input-form');
const $input = document.querySelector('#input');

function init(data) {
  $inputForm.addEventListener('submit', (event) => {
    //   console.log(event);
    event.preventDefault();
    const text = $input.value;
    //   console.log(text);
    $input.value = '';
  });

  data.push({
    ...todoModel,
    text,
    isDone: false,
  });
  render(data);
}
export default {
  init,
};
