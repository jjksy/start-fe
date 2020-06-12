const $inputForm = document.querySelector('#input-form');
const $input = document.querySelector('#input');

const todoModel = {
  id: '',
  text: '',
  isDone: false,
};
function init(data) {
  $inputForm.addEventListener('submit', (event) => {
    //   console.log(event);
    event.preventDefault();
    const text = $input.value;
    //   console.log(text);
    $input.value = '';
  });

  data.push({
    text,
    isDone: false,
  });
}

export default {
  init,
};
