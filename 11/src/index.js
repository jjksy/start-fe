import { render } from './html-render';
import './todos.css';

const todoModel = {
  id: '',
  text: '',
  isDone: false,
};

const todos = [
  //   {
  //     text: 'aaa',
  //     isDone: false,
  //   },
];
// console.log($inputForm);

render(todos);
