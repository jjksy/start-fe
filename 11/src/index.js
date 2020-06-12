import { render } from './html-render';
import formInput from './form-input';
import './todos.css';

const todos = [
  //   {
  //     text: 'aaa',
  //     isDone: false,
  //   },
];
// console.log($inputForm);

formInput.init();
render(todos);
