
import React from 'react';

import Task from './Task';

class List extends React.Component {

  render() {
    return (
      <div>
        {this.props.todo.map((todo, index) => {
          return (
            <Task
              handleClick={this.props.handleClick}
              index={index}
              key={index}
              todo={todo}
              handlerFilter={this.props.handlerFilter}
            />
          )
        })}
      </div>
    )
  }
}

export default List;