const $inputForm = document.querySelector('#input-form');
const $input = document.querySelector('#input');

function init() {
  $inputForm.addEventListener('submit', (event) => {
    //   console.log(event);
    event.preventDefault();
    const text = $input.value;
    //   console.log(text);
    $input.value = '';
  });
}

export default {
  init,
};
