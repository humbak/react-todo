import React from 'react';
import PropTypes from 'prop-types';

class Task extends React.Component {
  onClick = () => {
    this.props.onClick(this.props.index);
  }

  render() {
    return (
      <li className="task">
        {`${this.props.task} `}
        <button className="task__btn--remove" onClick={this.onClick}>usuń</button>
      </li>
    );
  }
}

Task.propTypes = {
  index: PropTypes.number,
  task: PropTypes.string,
  onClick: PropTypes.func,
};

export default Task;
