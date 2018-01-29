import React from 'react';
import ReactDOM from 'react-dom';
import Task from './components/Task.js';
import './index.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasksList: [],
    };
  }

  addTask = event => {
    const newTask = document.querySelector('.todo__input');
    const tasksList = [...this.state.tasksList, newTask.value];

    if (newTask.value) {
      this.setState({
        tasksList
      })
    }

    newTask.value = '';
    event.preventDefault();
  }

  removeItem = index => {
    const copyTaskList = [...this.state.tasksList];
    copyTaskList.splice(index, 1);

    this.setState({
      tasksList: copyTaskList
    });
  }

  render() {
    const todoList = this.state.tasksList.map((task, index) =>
      <Task key={index} index={index} task={task} onClick={this.removeItem}/>
    );

    return (
      <div className="todo">
        <form className="todo__insert" onSubmit={this.addTask}>
          <input type="text" className="todo__input" placeholder="Nowe zadanie..." />
          <button type="submit" className="todo__btn--add">Dodaj</button>
          <ul className="todo__list">
            {todoList}
          </ul>
        </form>
      </div>
    );
  }
}

ReactDOM.render(
  <Todo />,
  document.getElementById('root')
);